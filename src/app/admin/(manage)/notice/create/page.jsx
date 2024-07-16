"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import Editor from "@/components/admin/Editor"

import axiosInstance from "@/libs/axios"

export default function AdminNoticeCreatePage() {
  const router = useRouter()
  const [title, setTitle] = useState("")

  const handleCreatePost = async (content = "") => {
    if(!title) {
      return
    }
    
    try {
      const { data: post } = await axiosInstance.post("/api/notice", { title, content })

      router.replace("/admin/notice")
      router.refresh("/admin/notice")
    } catch (e) {
      console.log("---catch---")
      console.log(e)
    }
  }

  return (
    <div className="bg-admin-bg w-full border-r border-light-gray p-5 space-y-5">
      <h2 className="font-semibold text-2xl">글쓰기</h2>

      <section className="bg-white p-5">
        <form className="space-y-5" onSubmit={e => e.preventDefault()}>
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
          <Editor onClickCreate={handleCreatePost} cancelHref="/admin/notice" />
        </form>
      </section>
    </div>
  )
}