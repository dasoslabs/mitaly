"use server"

import createSupabase from "../supabase"
import { formatTimestampToKRDate } from "../utils/time"

const TABLE_NAME = "mitaly_associate"

export async function getAllContactList({ page = 1, limit = 10 } = {}) {
  const supabase = createSupabase()
  const start = (page - 1) * limit
  const end = start + limit - 1

  const { data: contactList, error } = await supabase
    .from(TABLE_NAME)
    .select(
      `
      id,
      type,
      name,
      contact,
      title,
      content,
      created_at
    `,
    )
    .order("created_at", { ascending: false })
  // .range(start, end)

  return contactList
    ? contactList.map((contact) => ({
        id: contact.id,
        type: contact.type,
        name: contact.name,
        contact: contact.contact,
        title: contact.title,
        content: contact.content,
        created_at: formatTimestampToKRDate(contact.created_at),
      }))
    : []
}

export async function createContact({ type, name, contact, title, content }) {
  const supabase = createSupabase()

  const { error } = await supabase
    .from(TABLE_NAME)
    .insert([{ type, name, contact, title, content }])

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
