import { HiArrowUturnRight } from "react-icons/hi2";
import { Icon } from "../../components/Icon/Icon";
import { Text } from "../../components/Text/Text";
import { NavLink } from "../../components/NavLink";
import { ButtonContainer } from "../../components/Button/ButtonContainer/ButtonContainer";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <div className="bg-gray-400 w-full p-10 pl-35 pr-35 flex justify-between">

      <Link to="/">
        <div className="flex gap-1 items-center">
          <Icon icon={HiArrowUturnRight} size="md" iconColor="green100"></Icon>
          <Text size="lg" decoration="semibold" textColor="green100">refund</Text>
        </div>
      </Link>

      <div className="flex gap-8 items-center">
        <Link to="/">
          <NavLink link="#" text="Solicitações de reembolso" isActive />
        </Link>

        <Link to="/NewRefund">
          <ButtonContainer text="Nova Solicitação" textColor="white" decoration="bold" />
        </Link>
      </div>
    </div>
  )
}