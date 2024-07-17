"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import Editor from "@/components/admin/Editor"

import axiosInstance from "@/libs/axios"

export default function AdminNoticeUpdatePage() {
  const id = useSearchParams().get("id")
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleUpdatePost = async (content = "") => {
    if (!title) {
      return
    }

    try {
      const {
        data: { success, message },
      } = await axiosInstance.put(`/api/notice/${id}`, { title, content })

      if (!success) {
        window.alert(message)
        return
      }

      router.replace("/admin/notice")
      router.refresh("/admin/notice")
    } catch (e) {
      console.log("---catch---")
      console.log(e)
    }
  }

  useEffect(() => {
    const fetchPostDetail = async (id) => {
      if (!id) {
        window.alert("게시글을 읽어올 수 없습니다.")
        return
      }

      try {
        const { data: post } = await axiosInstance.get(`/api/notice/${id}`)
        setTitle(post.title)
        setContent(post.content)
      } catch (e) {
        console.log(e)
      }
    }

    fetchPostDetail(id)
  }, [id])

  return (
    <>
      <h2 className="font-semibold text-2xl">글 수정</h2>

      <section className="bg-white p-5">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col space-y-2">
            <label>
              제목
              <span className="text-red ml-1">*</span>
            </label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <Editor
            defaultValue={content}
            onClickCreate={handleUpdatePost}
            cancelHref="/admin/notice"
          />
        </form>
      </section>
    </>
  )
}
