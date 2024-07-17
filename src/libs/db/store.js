import createSupabase from "../supabase"
import { formatTimestampToKRDate } from "../utils/time"

const TABLE_NAME = "mitaly_stores"

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

/**
 * 
    region TEXT NOT NULL, -- 지역
    name TEXT NOT NULL, -- 매장명
    address TEXT NOT NULL, -- 도로명주소 (카카오맵 표시)
    address_detail TEXT NOT NULL, -- 동호수 등 상세 주소
    contact TEXT, -- 전화
    business_hours TEXT NOT NULL, -- 영업 시간
    break_time TEXT, -- 브레이크 타임
    holidays TEXT, -- 휴일
    options store_options[] DEFAULT '{}', -- 옵션
    image_url TEXT, -- 매장 이미지 URL
    image_name TEXT, --매장 이미지 이름
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
 */