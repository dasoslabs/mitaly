import { NextResponse } from 'next/server'
import { createPost } from '@/libs/db/notice';

export async function POST(req) {
  const { title, content = null } = await req.json();
  const post = createPost({ title, content })

  return NextResponse.json(post, { status: 201 })
}