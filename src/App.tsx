import { ButtonContainer } from "./components/Button/ButtonContainer/ButtonContainer";
import { CardContainer } from "./components/CardContainer/CardContainer";
import { Request } from "./components/Request";

export function App() {
  return (
    <div className="bg-gray-400 flex w-auto h-screen">
      <CardContainer size="xl" className="flex flex-col">
        <div>
          <Request />
        </div>

        <div className="gap-1 flex">
          <ButtonContainer>
            TESTE
          </ButtonContainer>

        </div>
      </CardContainer>
      <ButtonContainer size="full" disabled>
        TESTE
      </ButtonContainer>
    </div>
  )
}
