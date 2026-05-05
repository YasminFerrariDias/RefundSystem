import { Icon } from "./Icon/Icon";
import { Text } from "./Text/Text";
import { PiForkKnifeFill } from "react-icons/pi";

export function Request() {
  return (
    <div className="flex items-center gap-3 p-0 w-full">
      <div className="bg-gray-400 w-8.5 h-8.5 rounded-full justify-center items-center flex ">
        <Icon icon={PiForkKnifeFill} size="sm" iconColor="green100" />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <Text size="md" textColor="gray100" decoration="bold">Rodrigo</Text>
          <Text size="sm" textColor="gray200">Alimentação</Text>
        </div>
        <div className="flex gap-1 items-end">
          <Text size="smLine" textColor="gray200" decoration="bodySm" className="pb-0.5">R$</Text>
          <Text size="lgLine" textColor="gray100" decoration="semibold">25,89</Text>
        </div>
      </div>
    </div>
  )
}