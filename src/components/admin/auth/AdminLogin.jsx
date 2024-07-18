"use server"

import { loginWithGoogle } from "@/app/api/auth/actions"

export default async function AdminLogin() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 border-b border-light-gray bg-white">
        <div className="h-full flex justify-between items-center max-w-screen-lg m-auto">
          <h1 className="text-2xl font-bold">관리자 센터</h1>
          <div></div>
        </div>
      </header>
      <main className="mt-20 bg-admin-bg min-h-[calc(100vh-80px)] pt-20">
        <div className="max-w-screen-sm m-auto bg-white p-10 space-y-5">
          <h2 className="text-xl font-bold">로그인</h2>
          <p>관리자 센터는 로그인이 필요합니다.</p>
          <form>
            <button
              formAction={loginWithGoogle}
              className="bg-black text-white py-2 px-5"
            >
              구글로 로그인 하기
            </button>
          </form>
        </div>
      </main>
    </>
  )
}
