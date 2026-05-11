import { useContext, useState } from "react";
import { Request } from "../../../components/Request"
import { Text } from "../../../components/Text/Text";
import { IconButton } from "../../../components/Button/IconButton/IconButton";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RefundContext } from "../../../contexts/Refund/RefundContext";

export function RefundCatalog() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const { refunds } = useContext(RefundContext)

  const itemsPerPage = 6
  const start = (currentPage - 1) * itemsPerPage
  const end = start + itemsPerPage
  const page = refunds.slice(start, end);
  const numberOfPages = Math.ceil(refunds.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const previousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <>
      <div className="flex flex-col">
        {page.map((refund) => (
          <Request 
            key={refund.id}
            id={refund.id}
            name={refund.name}
            amount={refund.amount}
            icon={refund.icon}
            category={refund.category}
            className={`hover:bg-gray-400`}
            onClick={() => navigate(`/DetailsRefund/${refund.id}`)}
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
