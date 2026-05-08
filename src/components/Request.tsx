import type { IconType } from "react-icons";
import { Icon } from "./Icon/Icon";
import { Text } from "./Text/Text";

interface RequestProps {
  id: number;
  name: string;
  category: string;
  icon: IconType
  amount: number
  onClick?: () => void 
  className?: string 
}

export function Request({ id, name, category, icon, amount, onClick, className, ...props }: RequestProps) {
  return (
    <div className={`flex items-center gap-3 p-2.5 w-full rounded-lg ${className}`} key={id} onClick={onClick} {...props}>
      <div className="bg-gray-400 w-8.5 h-8.5 rounded-full justify-center items-center flex ">
        <Icon icon={icon} size="sm" iconColor="green100" />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <Text size="md" textColor="gray100" decoration="bold">{name}</Text>
          <Text size="sm" textColor="gray200">{category}</Text>
        </div>
        <div className="flex gap-1 items-end">
          <Text size="smLine" textColor="gray200" decoration="bodySm" className="pb-0.5">R$</Text>
          <Text size="lgLine" textColor="gray100" decoration="semibold">{amount}</Text>
        </div>
      </div>
    </div>
  )
}