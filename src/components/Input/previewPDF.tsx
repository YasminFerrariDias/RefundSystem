import { FaRegFile } from "react-icons/fa";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

export function PreviewPDF() {
  return (
    <div className="flex gap-1 justify-centerr">
      <Icon icon={FaRegFile} iconColor="green100" size="sm" />
      <Text size="md" textColor="green100" decoration="semibold">Abrir comprovante</Text>
    </div>
  )
}