import { CiSearch } from "react-icons/ci";
import { IconButton } from "../../components/Button/IconButton/IconButton";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text/Text";
import { RefundCatalog } from "../../Features/RefundList/components/RefundCatalog";
import React, { useContext, useState } from "react";
import { RefundContext } from "../../contexts/Refund/RefundContext";

export function RefundList() {
  const [value, setValue] = useState('')
  const { searchResults, searchRefunds } = useContext(RefundContext)

  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <CardContainer>
      <div className="flex flex-col gap-6">
        <Text size="lg" decoration="bold">Solicitações</Text>
        <div className="flex items-center m-0 p-0 gap-1.5">
          <div className="flex-1">
            <Input
              value={value}
              onChange={handleValue}
              placeholder="Pesquisar pelo nome"
            />
          </div>

          <div>
            <IconButton
              icon={CiSearch}
              iconColor="white"
              onClick={() => searchRefunds(value)}
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
