import { useContext, useEffect, useState } from "react";
import { Request } from "../../../components/Request"
import { Text } from "../../../components/Text/Text";
import { IconButton } from "../../../components/Button/IconButton/IconButton";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RefundContext } from "../../../contexts/Refund/RefundContext";
import type { RefundType } from "../../../types/refundType";

export function RefundCatalog({ searchResults }: { searchResults: RefundType[] | null }) {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const { refunds, loadRefunds } = useContext(RefundContext)

  const dataToShow = searchResults !== null ? searchResults : refunds

  const itemsPerPage = 6
  const start = (currentPage - 1) * itemsPerPage
  const end = start + itemsPerPage
  const page = dataToShow.slice(start, end);
  const numberOfPages = Math.ceil(dataToShow.length / itemsPerPage)

  useEffect(() => {
    loadRefunds()
  }, [loadRefunds])

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const previousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <>
      <div className="flex flex-col">
        {refunds.length === 0 ? (
          <Text textColor="green100" className=" flex justify-center">
            Ainda não existe nenhuma solicitação de reembolso!
          </Text>
        ) : (
          page.map((refund) => (
            <Request
              key={refund.id}
              id={refund.id}
              title={refund.title}
              value={refund.value}
              icon={refund.icon}
              category={refund.category}
              className={`hover:bg-gray-400`}
              onClick={() => navigate(`/DetailsRefund/${refund.id}`)}
            />
          ))
        )}
      </div>

      <div className="flex justify-center gap-3 items-center fixed bottom-39 left-0 right-0">
        <IconButton
          disabled={currentPage === 1 ? true : false}
          onClick={previousPage}
          icon={GrFormPrevious}
          iconColor="white"
        />
        <Text size="md" textColor="gray200">{numberOfPages === 0 ? "0/0" : `${currentPage}/${numberOfPages}`}</Text>
        <IconButton
          disabled={currentPage === numberOfPages || currentPage == 0 ? true : false}
          onClick={nextPage}
          icon={MdNavigateNext}
          iconColor="white"
        />
      </div>
    </>
  )
}
