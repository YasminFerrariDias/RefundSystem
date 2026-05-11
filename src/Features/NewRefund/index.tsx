import { useState } from "react";
import { Alert } from "../../components/Alert";
import { ButtonContainer } from "../../components/Button/ButtonContainer/ButtonContainer";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { InputFile } from "../../components/FileComponents/InputFile";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select/Select";
import { Text } from "../../components/Text/Text";
import { ApiReceipts, ApiRefunds } from "../../services/api";
import type { RefundType } from "../types/refundType";
import { useSelectedFile } from "./hooks/useSelectedFile";
import { useForm, type SubmitHandler } from "react-hook-form"
import { Controller } from "react-hook-form"
import { useNavigate } from "react-router-dom";

export function NewRefund() {
  const { hasFile, setHasFile } = useSelectedFile()
  const { register, handleSubmit, control } = useForm<RefundType>()
  const [receipt, setReceiptFile] = useState<File | null>(null)
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<RefundType> = async (data: RefundType) => {
    const uploadResponse = await ApiReceipts.upload(receipt!)
    const receiptId = uploadResponse.data.receipt.id

    const refundData = {
      title: data.title,
      category: data.category,
      value: data.value,
      receipt: receiptId
    }

    await ApiRefunds.postCreate(refundData)
    console.log("sucesso")
    navigate("/")
  }

  function handleFileChange() {
    setHasFile(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-center">
        <CardContainer size="md" >
          <header className="mb-10 gap-2 flex flex-col">
            <Text size="lg" decoration="bold" className="flex-1">Nova solicitação de reembolso</Text>
            <Text size="md" decoration="regular" className="flex-1">Dados da despesa para solicitar reembolso</Text>
          </header>

          <div className="flex flex-col gap-6">
            <Input title="NOME DA SOLICITAÇÃO" {...register("title")} />

            <div className="flex gap-2">
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select
                    title="CATEGORIA"
                    className="w-full"
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />

              <Input title="VALOR" placeholder="0,00" className="w-38" {...register("value", { valueAsNumber: true })} />
            </div>

            <Alert textSize="2 MB" textFormat="PDF, PNG e JPEG"
              className={
                hasFile
                  ? "hidden"
                  : "opacity-100"
              }
            />

            <InputFile
              title="COMPROVANTE"
              onChange={(file => {
                setReceiptFile(file)
                handleFileChange()
              })}
            />

            <ButtonContainer text="Enviar" size="full" className="w-full" textColor="white" type="submit" />
          </div>
        </CardContainer>
      </div>
    </form>
  )
}


