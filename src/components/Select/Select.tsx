/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useToggle } from "./hooks/useToggle";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface SelectProps {
  title: string
  disabled?: boolean
  className?: string
  value?: string
  readOnly?: boolean
  onChange?: (value: string) => void
}

export function Select({ title, className, disabled = false, value, onChange, readOnly, ...props }: SelectProps) {
  const { isOpen, close, toggle } = useToggle();
  const [optionSelect, setOptionSelect] = useState(value || "Selecione")

  const categoryMap = {
    "food": "Alimentação",
    "hosting": "Hospedagem",
    "transport": "Transporte",
    "services": "Serviços",
    "others": "Outros",
  }

  function handleSelected(name: string) {
    setOptionSelect(name)
    onChange?.(name)
    close()
  }

  useEffect(() => {
    if (value) {
      setOptionSelect(value)
    }
  }, [value])

  return (
    <div className={`flex flex-col gap-1 relative group ${className}`} {...props}>
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
        onClick={disabled || readOnly ? undefined : toggle}
        tabIndex={disabled ? -1 : 0}
      >
        <span>{optionSelect}</span>
        <span className="flex items-center">{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </div>

      <div
        className={`
          bg-white border-gray-300 border rounded-lg p-3 gap-2 flex flex-col transition-all duration-100 absolute top-full left-0 right-0 mt-1 z-50
          ${isOpen ? 'visible' : 'hidden'}         
        `}
      >

        {Object.entries(categoryMap).map((category) => {
          return (
            <div key={category[0]} className={`
              p-1 cursor-pointer rounded 
              ${optionSelect === category[0]
                ? 'font-semibold'
                : 'font-normal'
              }`
            }
              onClick={() => handleSelected(category[0])}
            >
              <span>{category[1]}</span>
            </div>
          )
        })}
      </div>

    </div>
  )
}
