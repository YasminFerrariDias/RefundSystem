import { Text } from "./Text/Text";

export function Request() {
  return (
    <div className="flex items-center gap-3 p-0 w-full">
      <div className="bg-gray-400 w-8.5 h-8.5 rounded-full">

      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <Text className="text-sm font-bold">Rodrigo</Text>
          <Text className="text-xs text-gray-700">Alimentação</Text>
        </div>
        <div className="flex items-center">
          <Text>R$</Text>
          <Text>25,89</Text>
        </div>
      </div>
    </div>
  )
}