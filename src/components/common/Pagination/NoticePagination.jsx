import SvgIcon from "../SvgIcon"

export default function NoticePagination({
  items,
  totalPages = 0,
  currentPage = 1,
  setCurrentPage = () => {},
  ListItem = DefaultListItem,
}) {
  if (!totalPages) {
    return null
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const pageNumbers = []
  let startPage = Math.max(currentPage - 2, 1)
  let endPage = Math.min(currentPage + 2, totalPages)

  if (currentPage <= 3) {
    startPage = 1
    endPage = Math.min(5, totalPages)
  } else if (currentPage >= totalPages - 2) {
    startPage = Math.max(totalPages - 4, 1)
    endPage = totalPages
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <ul>
        {items?.map((item, idx) => (
          <ListItem key={idx} className="border p-4" {...item} />
        ))}
      </ul>
      <div className="flex justify-center items-center space-x-1 mt-10 text-sm">
        <div>
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="w-6 h-6 text-grey rounded disabled:opacity-50"
          >
            <SvgIcon name="arrow-start" />
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-6 h-6 text-grey rounded disabled:opacity-50"
          >
            <SvgIcon name="arrow-prev" />
          </button>
        </div>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full ${currentPage === number ? "bg-black text-white" : "bg-white text-[#999]"}`}
          >
            {number}
          </button>
        ))}
        <div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-6 h-6 text-grey rounded-full disabled:opacity-50"
          >
            <SvgIcon name="arrow-next" />
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="w-6 h-6 text-grey rounded-full disabled:opacity-50"
          >
            <SvgIcon name="arrow-end" />
          </button>
        </div>
      </div>
    </>
  )
}

export function DefaultListItem({ item }) {
  return <li>{item}</li>
}
