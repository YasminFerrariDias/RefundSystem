import { FaRegFile } from "react-icons/fa";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";
import cn from "classnames";
import { ApiReceipts } from "../../services/api";
import { ToastError } from "../Toast";

interface PreviewFileProps {
  text: string
  className?: string
  target?: string
  receiptId?: string
}

export function PreviewFile({ text, className, receiptId, target, ...props }: PreviewFileProps) {
  async function handleDownload() {
    const response = await ApiReceipts.download(receiptId!)

    try {
      const signedUrl = `http://localhost:3333${response.data.url}`
      window.open(signedUrl, '_blank')
      
    } catch (error) {
      console.log(error)

      ToastError('Erro ao visualizar comprovante!');
    }
  }

  return (
    <div className={cn(`
      flex gap-1 justify-center flex-row
      `, className)}
      {...props}>
      <a onClick={handleDownload} className="flex" target={target}>
        <Icon icon={FaRegFile} iconColor="green100" size="sm" />
        <Text size="md" textColor="green100" decoration="semibold">{text}</Text>
      </a>
    </div>
  )
}