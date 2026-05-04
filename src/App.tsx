import { CardContainer } from "./components/CardContainer/CardContainer";
import { RequestsPanel } from "./components/RequestsPanel";

export function App() {
  return (
    <div className="bg-gray-400 flex w-auto h-screen">
      <CardContainer size="xl">
        <RequestsPanel />
      </CardContainer>
    </div>
  )
}
