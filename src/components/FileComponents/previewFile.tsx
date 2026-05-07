import { FaRegFile } from "react-icons/fa";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";
import cn from "classnames";

interface PreviewFileProps {
  text: string
  link: string
  className?: string
}

export function PreviewFile({ text, link, className, ...props }: PreviewFileProps) {
  return (
    <div className={cn(`
      flex gap-1 justify-center flex-row
      `, className)}
      {...props}>
      <a href={link} className="flex">
        <Icon icon={FaRegFile} iconColor="green100" size="sm" />
        <Text size="md" textColor="green100" decoration="semibold">{text}</Text>
      </a>
    </div>
  )
}