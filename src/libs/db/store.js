import createSupabase from "../supabase"
import { formatTimestampToKRDate } from "../utils/time"

const TABLE_NAME = "mitaly_stores"
const STORAGE_NAME = "mitaly"

export async function getAllStores({ page = 1, limit = 10 } = {}) {
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
    id: store.id,
    region: store.region,
    name: store.name,
    address: store.address,
    address_detail: store.address_detail,
    business_hours: store.business_hours,
    break_time: store.break_time,
    holidays: store.holidays,
    options: store.options,
    image_url: store.image_url,
    image_name: store.image_name,
    isAdmin: store.author.is_admin,
  }
}

export async function createStore(formData) {
  const supabase = createSupabase()

  const region = formData.get("region")
  const name = formData.get("name")
  const address = formData.get("address")
  const address_detail = formData.get("address_detail")
  const contact = formData.get("contact")
  const business_hours = formData.get("business_hours")
  const break_time = formData.get("break_time") ?? null
  const holidays = formData.get("holidays") ?? null
  const options = formData.getAll("options")
  const image_file = formData.get("image_file") ?? null

  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { data: userData } = await supabase
    .from("users")
    .select("id, nickname")
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

  const { data: store, error } = await supabase
    .from(TABLE_NAME)
    .insert([
      {
        author_id: userData?.id,
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
      },
    ])
    .select()
    .single()

  return store
}

export async function updateStore({ id, formData }) {
  const supabase = createSupabase()
  

  const region = formData.get("region");
  const name = formData.get("name");
  const address = formData.get("address");
  const address_detail = formData.get("address_detail");
  const contact = formData.get("contact");
  const business_hours = formData.get("business_hours");
  const break_time = formData.get("break_time") ?? null;
  const holidays = formData.get("holidays") ?? null;
  const options = formData.getAll("options");
  const image_file = formData.get("image_file") ?? null;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: userData } = await supabase
    .from("users")
    .select("id, nickname")
    .eq("user_id", user?.id)
    .single();

  let image_url = null;
  let image_name = null;

  const updateData = {};

  if (region) updateData.region = region;
  if (name) updateData.name = name;
  if (address) updateData.address = address;
  if (address_detail) updateData.address_detail = address_detail;
  if (contact !== null) updateData.contact = contact;
  if (business_hours) updateData.business_hours = business_hours;
  if (break_time !== null) updateData.break_time = break_time;
  if (holidays !== null) updateData.holidays = holidays;
  if (options.length > 0) updateData.options = options;

  if (image_file) {
    const { data: existingStore } = await supabase
      .from(TABLE_NAME)
      .select("image_name")
      .eq("id", id)
      .single();

    if (existingStore?.image_name) {
      await supabase.storage
        .from(STORAGE_NAME)
        .remove([`stores/${existingStore.image_name}`]);
    }

    image_name = image_file.name?.replace(/\s+/g, "_");
    await supabase.storage
      .from(STORAGE_NAME)
      .upload(`stores/${image_name}`, image_file);

    const {
      data: { signedUrl },
    } = await supabase.storage
      .from(STORAGE_NAME)
      .createSignedUrl(`stores/${image_name}`, 100 * 365 * 24 * 60 * 60);
    image_url = signedUrl;

    updateData.image_url = image_url;
    updateData.image_name = image_name;
  }

  const { data: store } = await supabase
    .from(TABLE_NAME)
    .update(updateData)
    .eq("id", id)
    .select()
    .single()
    
  return true
}

export async function deleteStore(id) {
  const supabase = createSupabase()

  await supabase.from(TABLE_NAME).delete().eq("id", id)

  return true
}
