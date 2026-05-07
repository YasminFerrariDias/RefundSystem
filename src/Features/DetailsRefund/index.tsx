import { useState } from "react";
import { ButtonContainer } from "../../components/Button/ButtonContainer/ButtonContainer";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { Dialog, DialogTrigger } from "../../components/dialog";
import { PreviewFile } from "../../components/FileComponents/previewFile";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select/Select";
import { Text } from "../../components/Text/Text";
import { DeleteDialog } from "../DeleteDialog";

export function DetailsRefund() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center justify-center">
      <CardContainer size="md" >
        <header className="mb-10 gap-2 flex flex-col">
          <Text size="lg" decoration="bold" className="flex-1">Solicitação de reembolso</Text>
          <Text size="md" decoration="regular" className="flex-1">Dados da despesa para solicitar reembolso</Text>
        </header>
        <div className="flex flex-col gap-6">
          <Input placeholder="" title="NOME DA SOLICITAÇÃO" />
          <div className="flex gap-2">
            <Select title="CATEGORIA" className="w-full" />
            <Input title="VALOR" placeholder="0,00" className="w-38" />
          </div>
          <PreviewFile text="Abrir comprovante" link="https://www.google.com/?hl=pt_BR" />
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <ButtonContainer text="Excluir" size="full" className="w-full" textColor="white" />
            </DialogTrigger>
            <DeleteDialog />
          </Dialog>
        </div>
      </CardContainer>
    </div>
  )
}


