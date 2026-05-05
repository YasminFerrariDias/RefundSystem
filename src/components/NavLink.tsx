interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string
  text: string
  isActive?: boolean
  disabled?: boolean
}

export function NavLink({ link, text, isActive = false, disabled, ...props }: NavLinkProps) {
  return (
    <a
      href={disabled ? undefined : link}
      className={`
        text-sm font-semibold
        ${disabled 
          ? 'text-gray-200 cursor-not-allowed' 
          : isActive 
            ? 'text-green-100' 
            : 'text-gray-200 hover:text-green-100 transition-colors'
        }
      `}
      {...props}
    >
      {text}
    </a>
  )
}