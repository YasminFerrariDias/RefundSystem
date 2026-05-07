import { Alert } from "../src/components/Alert";
import { ButtonContainer } from "../src/components/Button/ButtonContainer/ButtonContainer";
import { DialogBody, DialogContent, DialogFooter, DialogHeader } from "../src/components/dialog";
import { InputFile } from "../src/components/FileComponents/InputFile";
import { Input } from "../src/components/Input";
import { Select } from "../src/components/Select/Select";

export function RefundNewDialog() {
  return (
    <DialogContent>
      <DialogHeader title="Nova solicitação de reembolso" text="Dados da despesa para solicitar reembolso" className="mb-10" />
      <DialogBody className="flex gap-8 flex-col">
        <Input placeholder="" title="NOME DA SOLICITAÇÃO" />
        <div className="flex gap-2">
          <Select title="CATEGORIA" className="w-full"></Select>
          <Input placeholder="0,00" title="VALOR" className="w-38.5" />
        </div>
        <Alert textSize="2MB" textFormat="JPG, PNG e PDF" />
        <InputFile title="COMPROVANTE" />
      </DialogBody>
      <DialogFooter>
        <ButtonContainer text="Excluir" size="full" textColor="white" className="w-full" />
      </DialogFooter>
    </DialogContent>
  )
}