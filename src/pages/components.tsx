import { ButtonContainer } from "../components/Button/ButtonContainer/ButtonContainer";
import { IconButton } from "../components/Button/IconButton/IconButton";
import { CardContainer } from "../components/CardContainer/CardContainer";
import { Request } from "../components/Request";
import { CiSearch } from "react-icons/ci";

export function Components() {
  return (
    <div className="bg-gray-400 w-auto h-screen">
      <CardContainer size="xl" className="flex flex-col ">
        <div>
          <Request />
        </div>

        <div className="gap-1 flex">
          <ButtonContainer text="Teste" sizeText="md" size="fit" textColor="white" />
          <ButtonContainer text="Teste" sizeText="md" size="fit" textColor="white" disabled />

          <IconButton icon={CiSearch} iconColor="white" />
          <IconButton icon={CiSearch} iconColor="white" disabled />
        </div>
      </CardContainer>
    </div>
  )
}