import AdminHeader from "@/components/admin/AdminHeader"
import AdminSidebar from "@/components/admin/AdminSidebar"

export default function AdminManageLayout({ children }) {
  return (
    <>
      <AdminHeader />
      <main className="mt-20 flex max-w-screen-lg m-auto">
        <AdminSidebar />
        {children}
      </main>
    </>
  )
}
