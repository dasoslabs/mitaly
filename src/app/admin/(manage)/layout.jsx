import AdminHeader from "@/components/admin/AdminHeader"

export default function AdminManageLayout({ children }) {
  return (
    <>
      <AdminHeader />
      <main className="mt-20">{children}</main>
    </>
  )
}
