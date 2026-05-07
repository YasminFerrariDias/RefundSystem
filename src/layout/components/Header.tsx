import { HiArrowUturnRight } from "react-icons/hi2";
import { Icon } from "../../components/Icon/Icon";
import { Text } from "../../components/Text/Text";
import { NavLink } from "../../components/NavLink";
import { ButtonContainer } from "../../components/Button/ButtonContainer/ButtonContainer";
import { Dialog, DialogBody, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../../components/dialog";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select/Select";
import { PreviewFile } from "../../components/FileComponents/previewFile";

export function Header() {
  return (
    <div className="bg-gray-400 w-full p-10 pl-35 pr-35 flex justify-between">
      <div className="flex gap-1 items-center">
        <Icon icon={HiArrowUturnRight} size="md" iconColor="green100"></Icon>
        <Text size="lg" decoration="semibold" textColor="green100">refund</Text>
      </div>
      <div className="flex gap-8">
        <NavLink link="#" text="Solicitação de reembolso" isActive />
        <Dialog>
          <DialogTrigger asChild>
            <ButtonContainer text="Nova Solicitação" textColor="white" decoration="bold" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader title="Solicitação de reembolso" text="Dados da despesa para solicitar reembolso" className="mb-10" />
            <DialogBody className="flex gap-8 flex-col">
              <Input placeholder="" title="NOME DA SOLICITAÇÃO" />
              <div className="flex gap-2">
                <Select title="CATEGORIA" className="w-full"></Select>
                <Input placeholder="0,00" title="VALOR" className="w-38.5" />
              </div>
              <PreviewFile text="Abrir comprovante" link="#" className="pb-4" />
            </DialogBody>
            <DialogFooter>
              <ButtonContainer text="Excluir" size="full" textColor="white" className="w-full" />
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </div>
    </div>
  )
}