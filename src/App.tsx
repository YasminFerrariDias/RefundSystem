import { CardContainer } from "./components/CardContainer/CardContainer";
import { Request } from "./components/Request";

export function App() {
  return (
    <div className="bg-gray-400 flex w-auto h-screen">
      <CardContainer size="xl">
        <Request />
      </CardContainer>
    </div>
  )
}
