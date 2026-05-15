import { useState } from "react";
import { ButtonContainer } from "../../components/Button/ButtonContainer/ButtonContainer";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { Dialog, DialogTrigger } from "../../components/dialog";
import { PreviewFile } from "../../components/FileComponents/previewFile";
import { Input } from "../../components/Input";
import { Select } from "../SelectCategory/Select"
import { Text } from "../../components/Text/Text";
import { DeleteDialog } from "../DeleteDialog";
import { IconButton } from "../../components/Button/IconButton/IconButton";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useRefund } from "./hooks/useRefund";

export function DetailsRefund() {
  const [open, setOpen] = useState(false)
  const { id } = useParams()
  const { data: refund, isLoading, error } = useRefund(id)

  return (
    <div className="flex items-center justify-center">
      <CardContainer size="md">
        {isLoading ? (
          <p className="flex items-center justify-center">Carregando...</p> 
        ) : error ? (
          <p className="flex items-center justify-center">Erro ao carregar solicitação!</p> 
        ) : !refund ? (
          <p className="flex items-center justify-center">Não foi possível identificar a solicitação!</p> 
        ) : (
          <>
            <header className="mb-10 gap-2 flex flex-col">
              <Text size="lg" decoration="bold" className="flex-1">Solicitação de reembolso</Text>
              <Text size="md" decoration="regular" className="flex-1">Dados da despesa para solicitar reembolso</Text>
            </header>
            <div className="flex flex-col gap-6">
              <Input value={refund.title} title="NOME DA SOLICITAÇÃO" readOnly />
              <div className="flex gap-2">
                <Select title="CATEGORIA" className="w-full" value={refund.category} />
                <Input title="VALOR" value={refund.value} className="w-38" readOnly />
              </div>
              {refund && refund.receipt && (
                <PreviewFile text="Abrir comprovante" receiptId={refund.receipt.id} target="_blank" />
              )}

              <div className="flex gap-2 m-0">
                <Link to='/'>
                  <IconButton icon={FaArrowLeft} buttonColor="green200" className="text-white -mt-px" />
                </Link>
 
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <ButtonContainer text="Excluir" size="full" className="w-full" textColor="white" />
                  </DialogTrigger>
                  <DeleteDialog id={refund.id} />
                </Dialog>
              </div>
            </div>
          </>
        )}
      </CardContainer>
    </div>
  )
}
