import { ButtonContainer } from "../../components/Button/ButtonContainer/ButtonContainer";
import { DialogClose, DialogContent, DialogFooter, DialogHeader } from "../../components/dialog";

export function DeleteDialog() {
  return (
    <DialogContent>
      <DialogHeader
        title="Excluir solicitação"
        text="Tem certeza que deseja excluir essa solicitação? Essa ação é irrervesível."
        className="mb-6" />
      <DialogFooter className="flex gap-1 ">
        <DialogClose asChild>
          <ButtonContainer text="Cancelar" size="fit" textColor="green100" buttonColor="transparent" />
        </DialogClose>
        
        <ButtonContainer text="Confirmar" size="fit" textColor="white" />
      </DialogFooter>
    </DialogContent>
  )
}