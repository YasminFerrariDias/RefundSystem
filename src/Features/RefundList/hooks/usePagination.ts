import { useMemo, useState } from "react"
import type { RefundType } from "../../../types/refundType";

export const usePagination = (list: RefundType[]) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6

  const { currentItems, totalPages } = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = list.slice(startIndex, endIndex)
    const totalPages = Math.ceil(list.length / itemsPerPage)

    return { currentItems, totalPages }
  }, [list, currentPage])

  function goToPage(page: number) {
    if (page < 1) page = 1
    if (page > totalPages) page = totalPages
    setCurrentPage(page)
  }

  function goToNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  function goToPrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return { currentItems, totalPages, currentPage, goToNextPage, goToPrevPage, goToPage }
}
