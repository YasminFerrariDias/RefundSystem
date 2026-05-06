import { ButtonContainer } from "../components/Button/ButtonContainer/ButtonContainer";
import { IconButton } from "../components/Button/IconButton/IconButton";
import { CardContainer } from "../components/CardContainer/CardContainer";
import { Input } from "../components/Input/Input";
import { NavLink } from "../components/NavLink";
import { Request } from "../components/Request";
import { CiSearch } from "react-icons/ci";
import { Select } from "../components/Select/Select";
import { InputPDF } from "../components/Input/InputPDF";

export function Components() {
  return (
    <div className="bg-gray-400 w-auto h-screen">
      <CardContainer size="xl" className="flex flex-col gap-3">
        <div>
          <Request />
        </div>

        <div className="gap-1 flex">
          <ButtonContainer text="Teste" sizeText="md" size="fit" textColor="white" />
          <ButtonContainer text="Teste" sizeText="md" size="fit" textColor="white" disabled />

          <IconButton icon={CiSearch} iconColor="white" />
          <IconButton icon={CiSearch} iconColor="white" disabled />
        </div>
        <div className="flex gap-2">
          <Input placeholder="Text Maior" title="TÍTULO" />
          <Input placeholder="Menor" className="w-20!" title="TEXT " />
        </div>
        <div className="flex gap-2">
          <NavLink text="Google" link="https://www.google.com/?hl=pt_br" disabled />
          <NavLink text="Google" link="https://www.google.com/?hl=pt_br" isActive={true} />
          <NavLink text="Google" link="https://www.google.com/?hl=pt_br" isActive={false} />
        </div>

        <div>
          <Select title="CATEGORIA" />
        </div>

        <div>
          <InputPDF />
        </div>
      </CardContainer>
    </div>
  )
}