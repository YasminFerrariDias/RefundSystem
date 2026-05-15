import { CardContainer } from "../../components/CardContainer/CardContainer";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text/Text";
import { RefundCatalog } from "../../Features/RefundList/components/RefundCatalog";
import { useSearchRefund } from "./hooks/useSearchRefunds";

export function RefundList() {
  const { searchResults, searchTerm, setSearchTerm } = useSearchRefund()

  return (
    <CardContainer>
      <div className="flex flex-col gap-6">
        <Text size="lg" decoration="bold">Solicitações</Text>
        <div className="flex items-center m-0 p-0 gap-1.5">
          <div className="flex-1">
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquisar pelo nome"
            />
          </div>

        </div>
        <hr className="text-gray-400" />
        <div>
          <RefundCatalog searchResults={searchResults} />
        </div>
      </div>
    </CardContainer>
  )
}
