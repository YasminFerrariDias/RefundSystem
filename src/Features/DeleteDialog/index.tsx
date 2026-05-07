import { ButtonContainer } from "../../components/Button/ButtonContainer/ButtonContainer";
import { DialogBody, DialogContent, DialogFooter, DialogHeader } from "../../components/dialog";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select/Select";


export function RefundEditDialog() {
  return (
    <DialogContent>
      <DialogHeader title="Solicitação de reembolso" text="Dados da despesa para solicitar reembolso" className="mb-10" />
      <DialogBody className="flex gap-8 flex-col">
        <Input placeholder="" title="NOME DA SOLICITAÇÃO" />
        <div className="flex gap-2">
          <Select title="CATEGORIA" className="w-full"></Select>
          <Input placeholder="0,00" title="VALOR" className="w-38.5" />
        </div>

      </DialogBody>
      <DialogFooter>
        <ButtonContainer text="Excluir" size="full" textColor="white" className="w-full" />
      </DialogFooter>
    </DialogContent>
  )
}