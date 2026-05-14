import { useContext } from "react";
import { Request } from "../../../components/Request"
import { Text } from "../../../components/Text/Text";
import { IconButton } from "../../../components/Button/IconButton/IconButton";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RefundContext } from "../../../contexts/Refund/RefundContext";
import type { RefundProps } from "../../../types/refundComponent";
import { usePagination } from "../hooks/usePagination";

export function RefundCatalog({ searchResults }: { searchResults: RefundProps[] | null }) {
  const navigate = useNavigate()
  const { refunds, isLoading } = useContext(RefundContext)

  const dataToShow = searchResults ?? refunds
  const { currentItems, totalPages, currentPage, goToNextPage, goToPrevPage, } = usePagination(dataToShow)

  if (isLoading) {
    return <p>carregando...</p>
  }

  return (
    <>
      <div className="flex flex-col">
        {!dataToShow || dataToShow.length === 0 ? (
          <Text textColor="green100" className=" flex justify-center">
            Ainda não existe nenhuma solicitação de reembolso!
          </Text>
        ) : (
          currentItems.map((refund) => (
            <Request
              key={refund.id}
              id={refund.id}
              title={refund.title}
              value={refund.value}
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
          onClick={goToPrevPage}
          icon={GrFormPrevious}
          iconColor="white"
        />
        <Text size="md" textColor="gray200">{`${currentPage}/${totalPages}`}</Text>
        <IconButton
          disabled={currentPage === totalPages || currentPage == 0 ? true : false}
          onClick={goToNextPage}
          icon={MdNavigateNext}
          iconColor="white"
        />
      </div>
    </>
  )
}
