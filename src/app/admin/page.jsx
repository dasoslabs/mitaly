export default function AdminPage() {
  return (
    <section>
      <h2>어드민 페이지</h2>
      <form action="/api/auth/logout" method="post">
        <button className="mt-5 bg-black text-white py-2 px-5">
          로그아웃
        </button>
      </form>
    </section>
  )
}
