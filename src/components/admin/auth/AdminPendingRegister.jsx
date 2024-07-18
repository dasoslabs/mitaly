export default function AdminPendingRegister({ userName = "" }) {
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 border-b border-light-gray bg-white">
        <div className="h-full flex justify-between items-center max-w-screen-lg m-auto">
          <h1 className="text-2xl font-bold">관리자 센터</h1>
          <div className="flex justify-center items-center space-x-8">
            <p>{userName}님</p>
            <form action="/api/auth/logout" method="post">
              <button className="bg-black text-white py-2 px-5">로그아웃</button>
            </form>
          </div>
        </div>
      </header>
      <main className="mt-20 bg-admin-bg min-h-[calc(100vh-80px)] pt-20">
        <div className="max-w-screen-sm m-auto bg-white p-10 space-y-5">
          <h2 className="text-xl font-bold">안내</h2>
          <p>가입 승인이 되지 않은 계정입니다.</p>
          <p>담당 관리자에게 문의 바랍니다.</p>
        </div>
      </main>
    </>
  )
}