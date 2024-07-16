"use server"

import { loginWithGoogle } from "@/app/api/auth/actions"

export default async function AdminLogin() {
  return (
    <form>
      <button formAction={loginWithGoogle} className="bg-black text-white py-2 px-5">
        구글로 로그인
      </button>
    </form>
  )
}