import { useContext } from "react";
import { ButtonContainer } from "../../components/Button/ButtonContainer/ButtonContainer";
import { DialogClose, DialogContent, DialogFooter, DialogHeader } from "../../components/dialog";
import { RefundContext } from "../../contexts/Refund/RefundContext";
import { useNavigate } from "react-router-dom";

interface DeleteDialogProps {
  id: number
}

export function DeleteDialog({ id }: DeleteDialogProps) {
  const navigate = useNavigate()
  const { deleteRefund } = useContext(RefundContext)

  function handleConfirm() {
    try {
      deleteRefund(id)

      alert("Excluido com sucesso")

      navigate("/")
    } catch (error) {
      console.log(error)
      alert("Erro ao excluir")
    }
  }

  return (
    <DialogContent>
      <DialogHeader
        title="Excluir solicitação"
        text="Tem certeza que deseja excluir essa solicitação? Essa ação é irrervesível."
        className="mb-6" />
      <DialogFooter className="flex gap-1 ">
        <DialogClose asChild>
          <ButtonContainer
            text="Cancelar"
            size="fit"
            textColor="green100"
            buttonColor="transparent"
          />
        </DialogClose>

        <ButtonContainer
          text="Confirmar"
          size="fit"
          textColor="white"
          onClick={handleConfirm}
        />
      </DialogFooter>
    </DialogContent>
  )
}