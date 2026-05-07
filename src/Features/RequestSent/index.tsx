import { Link } from "react-router-dom";
import { ButtonContainer } from "../../components/Button/ButtonContainer/ButtonContainer";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { Icon } from "../../components/Icon/Icon";
import { Text } from "../../components/Text/Text";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export function RequestSent() {
  return (
    <div className="flex items-center justify-center">
      <CardContainer size="md">
        <div className="flex flex-col items-center gap-6 mb-10">
          <Text size="lg" decoration="bold" className="flex-1" textColor="green100">Solicitação enviada!</Text>
          <Icon icon={IoMdCheckmarkCircleOutline} size="lg" iconColor="green100" />
          <Text size="md" decoration="regular" className="flex-1 text-center">
            Agora é apenas aguardar! Sua solicitação será analisada e, em breve, o setor financeiro irá entrar em contato com você.
          </Text>
        </div>
        <div className="gap-2 flex flex-col">
          <Link to="/">
            <ButtonContainer text="Solicitações de reembolso" size="full" className="w-full" textColor="white" buttonColor="green200" />
          </Link>
          <Link to="/NewRefund">
            <ButtonContainer text="Nova solicitação" size="full" className="w-full" textColor="white" />
          </Link>
        </div>
      </CardContainer>
    </div>
  )
}


