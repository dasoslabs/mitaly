"use server"

import createSupabase from "../supabase"
import { formatTimestampToKRDate } from "../utils/time"

const TABLE_NAME = "mitaly_stores"
const STORAGE_NAME = "mitaly"

export async function getAllStores() {
  const supabase = createSupabase()

  const { data: stores, error } = await supabase
    .from(TABLE_NAME)
    .select(
      `
      id,
      name,
      address,
      address_detail,
      business_hours
    `,
    )
    .order("created_at", { ascending: false })

  return stores
    ? stores.map((store) => ({
        id: store.id,
        name: store.name,
        address: store.address,
        address_detail: store.address_detail,
        business_hours: store.business_hours,
      }))
    : []
}

export async function getAllStoresForAdmin({ page = 1, limit = 10 } = {}) {
  const supabase = createSupabase()
  const start = (page - 1) * limit
  const end = start + limit - 1

  const { data: stores, error } = await supabase
    .from(TABLE_NAME)
    .select(
      `
      id,
      name,
      created_at,
      author:author_id (name)
    `,
    )
    .order("created_at", { ascending: false })
  // .range(start, end)

  return stores
    ? stores.map((store) => ({
        id: store.id,
        name: store.name,
        created_at: formatTimestampToKRDate(store.created_at),
        author: store.author.name,
      }))
    : []
}

export const getStoreDetailById = async (id) => {
  const supabase = createSupabase()

  const { data: store, error } = await supabase
    .from(TABLE_NAME)
    .select(
      `
      id,
      region,
      name,
      address,
      address_detail,
      contact,
      business_hours,
      break_time,
      holidays,
      options,
      image_url,
      image_name,
      author:author_id (is_admin)
    `,
    )
    .eq("id", id)
    .single()

  return {
    region: store.region,
    name: store.name,
    address: store.address,
    address_detail: store.address_detail,
    contact: store.contact,
    business_hours: store.business_hours,
    break_time: store.break_time,
    holidays: store.holidays,
    options: store.options,
    image_url: store.image_url,
    image_name: store.image_name,
    isAdmin: store.author.is_admin,
  }
}

export async function createStore(data) {
  const supabase = createSupabase()
  const { image_file } = data

  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { data: userData } = await supabase
    .from("users")
    .select("id, name")
    .eq("user_id", user?.id)
    .single()

  let image_url = null
  let image_name = null

  if (image_file) {
    image_name = image_file.name?.replace(/\s+/g, "_")
    await supabase.storage
      .from(STORAGE_NAME)
      .upload(`stores/${image_name}`, image_file)

    const {
      data: { signedUrl },
    } = await supabase.storage
      .from(STORAGE_NAME)
      .createSignedUrl(`stores/${image_name}`, 100 * 365 * 24 * 60 * 60)
    image_url = signedUrl
  }

  delete data.image_file
  const { error } = await supabase.from(TABLE_NAME).insert([
    {
      author_id: userData?.id,
      image_url,
      image_name,
      ...data,
    },
  ])

  if (error) {
    return false
  }

  return true
}

export async function updateStore({ id, data }) {
  const supabase = createSupabase()
  const { image_file } = data

  let image_url = null
  let image_name = null

  if (image_file) {
    const { data: existingStore } = await supabase
      .from(TABLE_NAME)
      .select("image_name")
      .eq("id", id)
      .single()

    if (existingStore?.image_name) {
      await supabase.storage
        .from(STORAGE_NAME)
        .remove([`stores/${existingStore.image_name}`])
    }

    image_name = image_file.name?.replace(/\s+/g, "_")
    await supabase.storage
      .from(STORAGE_NAME)
      .upload(`stores/${image_name}`, image_file)

    const {
      data: { signedUrl },
    } = await supabase.storage
      .from(STORAGE_NAME)
      .createSignedUrl(`stores/${image_name}`, 100 * 365 * 24 * 60 * 60)
    image_url = signedUrl
  }

  delete data.image_file
  const { error } = await supabase
    .from(TABLE_NAME)
    .update({
      image_url,
      image_name,
      ...data,
    })
    .eq("id", id)

  if (error) {
    return false
  }

  return true
}

export async function deleteStore(id) {
  const supabase = createSupabase()

  const { data: store } = await supabase
    .from(TABLE_NAME)
    .select("image_name")
    .eq("id", id)
    .single()

  if (store?.image_name) {
    await supabase.storage
      .from(STORAGE_NAME)
      .remove([`stores/${store.image_name}`])
  }

  await supabase.from(TABLE_NAME).delete().eq("id", id)

  return true
}
