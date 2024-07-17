import AdminHeader from "@/components/admin/AdminHeader"
import AdminSidebar from "@/components/admin/AdminSidebar"

export default function AdminManageLayout({ children }) {
  return (
    <>
      <AdminHeader />
      <main className="mt-20 flex max-w-screen-lg m-auto">
        <AdminSidebar />
        <div className="bg-admin-bg w-full border-r border-light-gray p-5 space-y-5">
          {children}
        </div>
      </main>
    </>
  )
}
