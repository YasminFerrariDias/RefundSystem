import { useState } from "react";
import { Alert } from "../../components/Alert";
import { ButtonContainer } from "../../components/Button/ButtonContainer/ButtonContainer";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { InputFile } from "../../components/FileComponents/InputFile";
import { Input } from "../../components/Input";
import { Select } from "../SelectCategory/Select";
import { Text } from "../../components/Text/Text";
import { ApiReceipts, ApiRefunds } from "../../services/api";
import type { RefundProps } from "../../types/refundComponent";
import { useForm, type SubmitHandler } from "react-hook-form"
import { Controller } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { ToastError, ToastSuccess } from "../../components/Toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NumericFormat } from 'react-number-format';

export function NewRefund() {
  const { register, handleSubmit, control, formState: { errors } } = useForm<RefundProps>()
  const [receipt, setReceiptFile] = useState<File | null>(null)
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: async (formData: RefundProps) => {
      const uploadResponse = await ApiReceipts.upload(receipt!)
      const receipID = uploadResponse.data.receipt.id
      const refundDatas = { ...formData, receipt: receipID }

      return await ApiRefunds.postCreate(refundDatas)
    },
    onSuccess: () => {
      ToastSuccess('Cadastrado com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['refunds'] })
      navigate("/RequestSent")
    },
    onError: () => {
      ToastError("Erro ao processar o comprovante!")
    }
  })

  const onSubmit: SubmitHandler<RefundProps> = (data: RefundProps) => {
    if (!receipt) {
      ToastError("Selecione um comprovante!")
      return
    }

    mutate(data)
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
            <div>
              <Input title="NOME DA SOLICITAÇÃO" {...register("title", { required: "Campo obrigatório!" })} />
              {errors.title && <span className="text-green-200 text-sm -mt-05">{errors.title.message}</span>}
            </div>

            <div className="flex gap-2">
              <div>
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: "Selecione uma categoria!" }}
                  render={({ field }) => (
                    <Select
                      title="CATEGORIA"
                      className="w-80"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                {errors.category && <span className="text-green-200 text-sm">{errors.category.message}</span>}
              </div>

              <div className="-mt-1.25">
                <label className={`
                  text-sm transition-colors duration-200 text-gray-200
                  group-focus-within:text-green-100 text-[10px]
                `}>
                  VALOR
                </label>
                <Controller
                  name="value"
                  control={control}
                  rules={{ required: "Obrigatório!" }}
                  render={({ field: { onChange, value } }) => (
                    <NumericFormat
                      thousandSeparator="."
                      decimalSeparator=","
                      prefix="R$ "
                      placeholder="R$ 0,00"
                      className="h-12.5 w-full rounded-lg p-4
                      border-gray-300 border
                      text-gray-100 placeholder:text-gray-200
                      focus:border-green-100 focus:outline-none 
                      focus:border-[1.5px] caret-green-100"
                      value={value}
                      onValueChange={(values) => onChange(values.floatValue)}
                    />
                  )}

                />
                {errors.value && <span className="text-green-200 text-sm">{errors.value.message}</span>}
              </div>
            </div>

            <Alert textSize="2 MB" textFormat="PDF, PNG e JPEG"
              className={
                receipt !== null
                  ? "hidden"
                  : "opacity-100"
              }
            />

            <InputFile
              title="COMPROVANTE"
              onChange={(file => {
                setReceiptFile(file)
              })}

            />

            <ButtonContainer text="Enviar" size="full" className="w-full" textColor="white" type="submit" />
          </div>
        </CardContainer>
      </div>
    </form>
  )
}
