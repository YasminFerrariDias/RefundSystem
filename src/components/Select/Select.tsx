import { useState } from "react";
import { useToggle } from "./hooks/useToggle";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export function Select() {
  const { isOpen, close, toggle } = useToggle();
  const [optionSelect, setOptionSelect] = useState("Selecione")

  function handleSelected(name: string) {
    setOptionSelect(name)
    close()
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="">CATEGORIA</label>
      <div
        className="bg-white border-gray-300 border rounded-lg p-3 gap-2 flex flex-row justify-between"
        onClick={toggle}
      >
        <span>{optionSelect}</span>
        <span className="flex items-center">{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </div>
      <div
        className={`
          bg-white border-gray-300 border rounded-lg p-3 gap-2 flex flex-col transition-all duration-100
          ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}         
        `}
      >
        <div
          className={`
              p-1 cursor-pointer rounded 
              ${optionSelect === 'Alimentação'
              ? 'font-bold'
              : 'font-normal'
            }`
          }
          onClick={() => handleSelected("Alimentação")}
        >
          <span>Alimentação</span>
        </div>
        <div
          className={`
              p-1 cursor-pointer rounded 
              ${optionSelect === 'Hospedagem'
              ? 'font-bold'
              : 'font-normal'
            }`
          }
          onClick={() => handleSelected("Hospedagem")}
        >
          <span>Hospedagem</span>
        </div>
        <div
          className={`
              p-1 cursor-pointer rounded 
              ${optionSelect === 'Transporte'
              ? 'font-bold'
              : 'font-normal'
            }`
          }
          onClick={() => handleSelected("Transporte")}
        >
          <span>Transporte</span>
        </div>
        <div
          className={`
              p-1 cursor-pointer rounded 
              ${optionSelect === 'Serviços'
              ? 'font-bold'
              : 'font-normal'
            }`
          }
          onClick={() => handleSelected("Serviços")}
        >
          <span>Serviços</span>
        </div>
        <div
          className={`
              p-1 cursor-pointer rounded 
              ${optionSelect === 'Outros'
              ? 'font-bold'
              : 'font-normal'
            }`
          }
          onClick={() => handleSelected("Outros")}
        >
          <span>Outros</span>
        </div>
      </div>

    </div>
  )
}