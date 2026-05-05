interface ComponentsProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
}

export function Input({ placeholder, className, ...props }: ComponentsProps) {
  return (
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
  )
}