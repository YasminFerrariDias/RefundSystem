import { CiSearch } from "react-icons/ci";
import { IconButton } from "../../components/Button/IconButton/IconButton";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text/Text";
import { RefundCatalog } from "../../Features/RefundList/components/RefundCatalog";
import React, { useState } from "react";

export function RefundList() {
  const [value, setValue] = useState('')

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
              onClick={() => console.log("teste", value)}
            />
          </div>
        </div>
        <hr className="text-gray-400" />
        <div>
          <RefundCatalog />
        </div>
      </div>
    </CardContainer>
  )
}
