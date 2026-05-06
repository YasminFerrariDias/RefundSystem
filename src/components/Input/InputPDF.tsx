import { FiUploadCloud } from "react-icons/fi";
import { IconButton } from "../Button/IconButton/IconButton";
import { Text } from "../Text/Text";
import { useRef } from "react";

export function InputPDF() {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const openFileSelector = () => {
    fileInputRef.current?.click()
  }

  return (
    <>
      <input type="file" ref={fileInputRef} className="hidden" />
      <div
        className={`
          w-full h-12 relative group bg-white border border-gray-300 rounded-lg overflow-hidden
        `}>
        <div className="w-full h-12 flex items-center justify-between pl-4">
          <Text className="text-gray-100">Nome do arquivo.pdf</Text>
          <IconButton
            icon={FiUploadCloud}
            iconColor="white"
            color="bg-green-100"
            className="cursor-pointer"
            onClick={openFileSelector}
          />
        </div>
      </div>
    </>
  )
}