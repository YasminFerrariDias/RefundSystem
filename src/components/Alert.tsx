import { Text } from "./Text/Text";

interface AlertProps {
  textSize: string
  textFormat: string
  className?: string
}

export function Alert({textSize, textFormat, className}: AlertProps) {
  return (
    <div className={`p-3 rounded-lg bg-gray-400 ${className}`}>
      <Text size="md">Tamanho máximo: {textSize}</Text>
      <b />
      <Text>Você pode selecionar arquivos em {textFormat}</Text>
    </div>
  )
}