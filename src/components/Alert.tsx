import { Text } from "./Text/Text";

interface AlertProps {
  textSize: string
  textFormat: string
}

export function Alert({textSize, textFormat}: AlertProps) {
  return (
    <div className="border-r-gray-400 border solid p-5 rounded-2xl">
      <Text size="md" >Tamanho máximo: {textSize}</Text>
      <b />
      <Text>Tamanho máximo: {textFormat}</Text>
    </div>
  )
}