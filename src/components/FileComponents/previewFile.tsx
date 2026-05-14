import { FaRegFile } from "react-icons/fa";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";
import cn from "classnames";
import { ApiReceipts } from "../../services/api";
import { ToastError, ToastInfo } from "../Toast";
import { useMutation } from "@tanstack/react-query";

interface PreviewFileProps {
  text: string
  className: string
  target: string
  receiptId: string
}

export function PreviewFile({ text, receiptId, className, target, ...props }: PreviewFileProps) {
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => ApiReceipts.download(id),
    onSuccess: (response) => {
      ToastInfo('Redirecionando...')
      const signedUrl = `${import.meta.env.VITE_API_URL}${response.data.url}`
      window.open(signedUrl, '_blank')
    },
    onError: () => {
      ToastError('Erro ao visualizar comprovante!')
    }
  })

  return (
    <div className={cn(`
      flex gap-1 justify-center flex-row
      `, className)}
      {...props}>
      <a onClick={() => mutate(receiptId!)} className="flex" target={target}>
        <Icon icon={FaRegFile} iconColor="green100" size="sm" />
        <Text size="md" textColor="green100" decoration="semibold" style={{pointerEvents: isPending ? 'none' : 'auto'}}>{text}</Text>
      </a>
    </div>
  )
}
