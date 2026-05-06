import { useState } from "react";
import { Request } from "../components/Request"
import { requests } from "../utils/requests";
import { Text } from "../components/Text/Text";
import { IconButton } from "../components/Button/IconButton/IconButton";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

export function RefundCatalog() {
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 6
  const start = (currentPage - 1) * itemsPerPage
  const end = start + itemsPerPage
  const page = requests.slice(start, end);
  const numberOfPages = Math.ceil(requests.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const previousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <>
      <div className="flex flex-col gap-5 ">
        {page.map((request) => (
          <Request
            key={request.id}
            id={request.id}
            name={request.name}
            amount={request.amount}
            icon={request.icon}
            category={request.category}
          />
        ))}
      </div>

      <div className="flex justify-center gap-3 items-center fixed bottom-39 left-0 right-0">
        <IconButton
          disabled={currentPage === 1 ? true : false}
          onClick={previousPage}
          icon={GrFormPrevious}
          iconColor="white"
        />
        <Text size="md" textColor="gray200">{currentPage}/{numberOfPages}</Text>
        <IconButton
          disabled={currentPage === numberOfPages ? true : false}
          onClick={nextPage}
          icon={MdNavigateNext}
          iconColor="white"
        />
      </div>
    </>
  )
}