export default function AdminHeader() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 border-b border-light-gray bg-white">
      <div className="h-full flex justify-between items-center max-w-screen-lg m-auto">
        <h1 className="text-2xl font-bold">관리자 센터</h1>
        <div className="flex justify-center items-center space-x-8">
          <p>{"name"}님</p>
          <form action="/api/auth/logout" method="post">
            <button className="bg-black text-white py-2 px-5">
              로그아웃
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}
