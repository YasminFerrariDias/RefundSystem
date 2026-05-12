import { CiSearch } from "react-icons/ci";
import { IconButton } from "../../components/Button/IconButton/IconButton";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text/Text";
import { RefundCatalog } from "../../Features/RefundList/components/RefundCatalog";
import React, { useState } from "react";
import { ApiRefunds } from "../../services/api";
import { Bounce, toast } from "react-toastify";

export function RefundList() {
  const [value, setValue] = useState('')
  const [searchResults, setSearchResults] = useState(null)

  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  async function handleSearch(value: string) {
    try {
      const search = await ApiRefunds.getSearch(value)
      setSearchResults(search.data.refunds.data)
      
    } catch (error) {
      console.log(error)

      toast.error('Erro ao executar a pesquisa!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    } 
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
              onClick={() => handleSearch(value)}
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
