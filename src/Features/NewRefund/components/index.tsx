import { ButtonContainer } from "../../../components/Button/ButtonContainer/ButtonContainer";
import { CardContainer } from "../../../components/CardContainer/CardContainer";
import { InputFile } from "../../../components/FileComponents/InputFile";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select/Select";
import { Text } from "../../../components/Text/Text";

export function NewRefund() {
  return (
    <div className="flex items-center justify-center">
      <CardContainer size="md" >
        <header className="mb-10 gap-2 flex flex-col">
          <Text size="lg" decoration="bold" className="flex-1">Nova solicitação de reembolso</Text>
          <Text size="md" decoration="regular" className="flex-1">Dados da despesa para solicitar reembolso</Text>
        </header>
        <div className="flex flex-col gap-6">
          <Input placeholder="" title="NOME DA SOLICITAÇÃO"/>
          <div className="flex gap-2">
            <Select title="CATEGORIA" className="w-full" />
            <Input title="VALOR" placeholder="0,00" className="w-38" />
          </div>
          <InputFile title="COMPROVANTE" />
          <ButtonContainer text="Enviar" size="full" className="w-full" textColor="white" />
        </div>
      </CardContainer>
    </div>
  )
}


