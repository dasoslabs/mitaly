"use server"

import createSupabase from "../supabase"

const TABLE_NAME = "mitaly_faq"
const CATEGORY_TABLE_NAME = "mitaly_faq_categories"

export async function getFaqTotalCount() {
  const supabase = createSupabase()
  const { count } = await supabase
    .from(TABLE_NAME)
    .select("*", { count: "exact", head: true })
  return count
}

export async function getAllFaqWithPagination({ page = 1, limit = 10 } = {}) {
  const supabase = createSupabase()

  const start = (parseInt(page) - 1) * parseInt(limit)
  const end = start + parseInt(limit) - 1

  const { data: faqList, error } = await supabase
    .from(TABLE_NAME)
    .select(
      `
      id,
      question,
      answer,
      category:category_id (id, name)
    `,
    )
    .order("created_at", { ascending: false })
    .range(start, end)

  return faqList
    ? faqList.map((faq) => ({
        id: faq.id,
        question: faq.question,
        answer: faq.answer,
        category_id: faq.category.id,
        category_name: faq.category.name,
      }))
    : []
}

export async function getCategories() {
  const supabase = createSupabase()

  const { data } = await supabase
    .from(CATEGORY_TABLE_NAME)
    .select("id, name")
    .order("id", { ascending: true })

  return data
}

export async function getAllFaq() {
  const supabase = createSupabase()

  const { data: faqList, error } = await supabase
    .from(TABLE_NAME)
    .select(
      `
      id,
      question,
      answer,
      category:category_id (name)
    `,
    )
    .order("created_at", { ascending: false })

  return faqList
    ? faqList.map((faq) => ({
        id: faq.id,
        question: faq.question,
        answer: faq.answer,
        category_name: faq.category.name,
      }))
    : []
}

export async function getFaqDetailById(id) {
  const supabase = createSupabase()

  const { data: faq, error } = await supabase
    .from(TABLE_NAME)
    .select(
      `
      question,
      answer,
      category_id
    `,
    )
    .eq("id", id)
    .single()

  return {
    question: faq.question,
    answer: faq.answer,
    category_id: faq.category_id,
  }
}

export async function createFaq({ category_id, question, answer }) {
  const supabase = createSupabase()

  const { error } = await supabase
    .from(TABLE_NAME)
    .insert([{ category_id, question, answer }])

  if (error) {
    return false
  }

  return true
}

export async function updateFaq({ id, question, answer, category_id }) {
  const supabase = createSupabase()

  const { error } = await supabase
    .from(TABLE_NAME)
    .update({ question, answer, category_id })
    .eq("id", id)

  if (error) {
    return false
  }

  return true
}

export async function deleteFaq(id) {
  const supabase = createSupabase()

  const { error } = await supabase.from(TABLE_NAME).delete().eq("id", id)

  if (error) {
    return false
  }

  return true
}
