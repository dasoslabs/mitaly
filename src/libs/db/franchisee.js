"use server"

import createSupabase from "../supabase"
import { formatTimestampToKRDate } from "../utils/time"

const TABLE_NAME = "mitaly_franchisee"

export async function getAllContactList({ page = 1, limit = 10 } = {}) {
  const supabase = createSupabase()
  const start = (page - 1) * limit
  const end = start + limit - 1

  const { data: contactList, error } = await supabase
    .from(TABLE_NAME)
    .select(
      `
      id,
      name,
      contact,
      region,
      created_at
    `,
    )
    .order("created_at", { ascending: false })
  // .range(start, end)

  return contactList
    ? contactList.map((contact) => ({
        id: contact.id,
        name: contact.name,
        contact: contact.contact,
        region: contact.region,
        created_at: formatTimestampToKRDate(contact.created_at),
      }))
    : []
}

export async function createContact({ name, contact, region }) {
  const supabase = createSupabase()

  const { error } = await supabase
    .from(TABLE_NAME)
    .insert([{ name, contact, region }])

  if (error) {
    return false
  }

  return true
}

export async function deleteContact(id) {
  const supabase = createSupabase()

  const { error } = await supabase.from(TABLE_NAME).delete().eq("id", id)

  if (error) {
    return false
  }

  return true
}
