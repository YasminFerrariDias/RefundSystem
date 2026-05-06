import { useState } from "react";
import { useToggle } from "./hooks/useToggle";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface SelectProps {
  title: string
  disabled?: boolean
}

export function Select({title, disabled = false }: SelectProps) {
  const { isOpen, close, toggle } = useToggle();
  const [optionSelect, setOptionSelect] = useState("Selecione")

  function handleSelected(name: string) {
    setOptionSelect(name)
    close()
  }

  return (
    <div className="flex flex-col gap-1 relative group">
      <label className={`
        text-sm transition-colors duration-200
        group-focus-within:text-green-100  text-[10px]
        ${disabled ? 'text-gray-300' : 'text-gray-200'}
        ${isOpen ? 'text-green-100' : ''}
      `}>
        {title}
      </label>
      <div
        className={`
          bg-white border rounded-lg p-3 gap-2 flex flex-row justify-between
          transition-all duration-200
          border-gray-300
          focus:outline-none focus:border-green-100 focus:ring-1 focus:ring-green-100
          ${isOpen ? 'border-green-100 ring-1 ring-green-100' : ''}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        onClick={disabled ? undefined : toggle}
        tabIndex={disabled ? -1 : 0}  
      >
        <span>{optionSelect}</span>
        <span className="flex items-center">{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </div>

      <div
        className={`
          bg-white border-gray-300 border rounded-lg p-3 gap-2 flex flex-col transition-all duration-100 absolute top-full left-0 right-0 mt-1 z-1
          ${isOpen ? 'visible' : 'hidden'}         
        `}
      >
        <div
          className={`
              p-1 cursor-pointer rounded 
              ${optionSelect === 'Alimentação'
              ? 'font-semibold'
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
              text-gray-100
              ${optionSelect === 'Hospedagem'
              ? 'font-semibold'
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
              ? 'font-semibold'
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
              ? 'font-semibold'
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
              ? 'font-semibold'
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