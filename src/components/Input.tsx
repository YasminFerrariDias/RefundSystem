interface ComponentsProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  title?: string
}

export function Input({ placeholder, title, className, ...props }: ComponentsProps) {
  return (
    <div className="flex flex-col gap-1 group">
      <label className={`
        text-sm transition-colors duration-200
        group-focus-within:text-green-100 text-[10px]
        ${props.disabled ? 'text-gray-300' : 'text-gray-200'}
      `}>
        {title}
      </label>
      <input
        placeholder={placeholder}
        className={`
          ${className} 
          h-12 w-full rounded-lg p-4
          border-gray-300 border
          text-gray-100 placeholder:text-gray-200
          focus:border-green-100 focus:outline-none 
          focus:border-[1.5px] caret-green-100 
        `}
        {...props}
      />
    </div>
  )
}