import { FiUploadCloud } from "react-icons/fi";
import { IconButton } from "../Button/IconButton/IconButton";
import { Text } from "../Text/Text";
import { useRef, useState } from "react";
import { ToastError } from "../Toast";

interface InputFileProps {
  title: string;
  onChange?: (file: File) => void
}

export function InputFile({ title, onChange }: InputFileProps) {
  const [nameFile, setNameFile] = useState("Nome do arquivo.pdf")
  const [isUploading, setIsUploading] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  // faz o navegador abrir a janela de seleção de arquivos
  const openFileSelector = () => {
    fileInputRef.current?.click()
  }

  return (
    <div>
      <input type="file" ref={fileInputRef} className="hidden" accept=".pdf, .jpg, .png"
        onChange={(e) => {
          const file = e.target.files?.[0]; // pega o 1° arquivo
          setIsUploading(true)

          if (!file) {
            setIsUploading(false);
            return;
          }

          const maxSize = 2 * 1024 * 1024

          if (file.size <= maxSize) {
            setNameFile(file.name)
            onChange?.(file)
          } else {
            setNameFile("Nome do arquivo.pdf")
            ToastError("Tamanho do arquivo excedido!")
          }

          setIsUploading(false)
        }}
      />
      <Text size="xs" textColor="gray200">{title}</Text>
      <div
        className={`
          w-full h-12 relative group bg-white border border-gray-300 rounded-lg overflow-hidden
        `}>
        <div className="w-full h-12 flex items-center justify-between pl-4">
          <Text className="text-gray-100" size="mdLine" textColor="gray200">{nameFile}</Text>
          <IconButton
            icon={FiUploadCloud}
            iconColor="white"
            buttonColor="green100"
            className="cursor-pointer m-0"
            onClick={openFileSelector}
            disabled={isUploading}
            type="button"
          />
        </div>
      </div>
    </div>
  )
}
