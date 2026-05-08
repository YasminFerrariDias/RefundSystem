interface NavLinkProps {
  text: string
}

export function NavLink({text, ...props }: NavLinkProps) {
  return (
    <p {...props}>
      {text}
    </p>
  )
}