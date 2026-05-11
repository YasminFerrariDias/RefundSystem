import { useContext } from "react";
import { ButtonContainer } from "../../components/Button/ButtonContainer/ButtonContainer";
import { DialogClose, DialogContent, DialogFooter, DialogHeader } from "../../components/dialog";
import { RefundContext } from "../../contexts/Refund/RefundContext";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

interface DeleteDialogProps {
  id: string
}

export function DeleteDialog({ id }: DeleteDialogProps) {
  const navigate = useNavigate()
  const { deleteRefund } = useContext(RefundContext)

  function handleConfirm() {
    try {
      deleteRefund(id)

      toast.success('Excluído com sucesso!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      navigate("/")
    } catch (error) {
      console.log(error)
      
      toast.error('Erro ao excluir!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

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