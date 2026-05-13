import { ButtonContainer } from "../../components/Button/ButtonContainer/ButtonContainer";
import { DialogClose, DialogContent, DialogFooter, DialogHeader } from "../../components/dialog";
import { useNavigate } from "react-router-dom";
import { ToastError, ToastSuccess } from "../../components/Toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiRefunds } from "../../services/api";

interface DeleteDialogProps {
  id: string
}

export function DeleteDialog({ id }: DeleteDialogProps) {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: (id: string) => ApiRefunds.deleteRefund(id),
    onSuccess: () => {
      ToastSuccess('Excluído com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['refunds'] })
      navigate("/")
    },
    onError: () => {
      ToastError('Erro ao excluir!')
    }
  })

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
          onClick={() => mutate(id)}
        />
      </DialogFooter>
    </DialogContent>
  )
}