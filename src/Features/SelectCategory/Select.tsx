import { useToggle } from "./hooks/useToggle";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { categoryMapEnglish, categoryMapPortuguese } from "./types/categoryMap";

interface SelectProps {
  title: string
  disabled?: boolean
  className?: string
  value?: string
  readOnly?: boolean
  onChange?: (value: string) => void
}

export function Select({ title, className, disabled = false, value, onChange, ...props }: SelectProps) {
  const { isOpen, close, toggle } = useToggle();

  function handleSelected(name: string) {
    onChange?.(name)
    close()
  }

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
        onClick={disabled ? undefined : toggle}
        tabIndex={disabled ? -1 : 0}
      >
        <span>{categoryMapPortuguese[categoryMapEnglish.indexOf(value || "")] || "Selecione"}</span>
        <span className="flex items-center">{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </div>

      <div
        className={`
          bg-white border-gray-300 border rounded-lg p-3 gap-2 flex flex-col transition-all duration-100 absolute top-full left-0 right-0 mt-1 z-50
          ${isOpen ? 'visible' : 'hidden'}         
        `}
      >

        {categoryMapEnglish.map((englishValue, index) => {
          return (
            <div key={index} className={`
              p-1 cursor-pointer rounded 
              ${value === englishValue
                ? 'font-semibold'
                : 'font-normal'
              }`
            }
              onClick={() => handleSelected(englishValue)}
            >
              <span>{categoryMapPortuguese[index]}</span>
            </div>
          )
        })}
      </div>

    </div>
  )
}
