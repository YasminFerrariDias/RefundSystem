import { PiForkKnifeFill, PiBuildingFill, PiCarFill, PiWrenchFill, PiPackageFill } from "react-icons/pi";


import type { RefundType } from "../Features/types/refundType";
import { Icon } from "./Icon/Icon";
import { Text } from "./Text/Text";

export function Request({ id, title, category, value, onClick, className, ...props }: RefundType) {

  let IconComponent;
  if (category === "food") IconComponent = PiForkKnifeFill;
  else if (category === "hosting") IconComponent = PiBuildingFill;
  else if (category === "transport") IconComponent = PiCarFill;
  else if (category === "services") IconComponent = PiWrenchFill;
  else IconComponent = PiPackageFill;

  return (
    <div className={`flex items-center gap-3 p-2.5 w-full rounded-lg ${className}`}
      key={id} onClick={onClick} {...props}
    >
      <div className="bg-gray-400 w-8.5 h-8.5 rounded-full justify-center items-center flex ">
        <Icon icon={IconComponent} size="sm" iconColor="green100" />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <Text size="md" textColor="gray100" decoration="bold">{title}</Text>
          <Text size="sm" textColor="gray200">{category}</Text>
        </div>
        <div className="flex gap-1 items-end">
          <Text size="smLine" textColor="gray200" decoration="bodySm" className="pb-0.5">R$</Text>
          <Text size="lgLine" textColor="gray100" decoration="semibold">{value}</Text>
        </div>
      </div>
    </div>
  )
}