import { useState } from "react";
import { Alert } from "../../components/Alert";
import { ButtonContainer } from "../../components/Button/ButtonContainer/ButtonContainer";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { InputFile } from "../../components/FileComponents/InputFile";
import { Input } from "../../components/Input";
import { Select } from "../SelectCategory/Select";
import { Text } from "../../components/Text/Text";
import { ApiReceipts, ApiRefunds } from "../../services/api";
import type { RefundType } from "../types/refundType";
import { useSelectedFile } from "./hooks/useSelectedFile";
import { useForm, type SubmitHandler } from "react-hook-form"
import { Controller } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

export function NewRefund() {
  const { hasFile, setHasFile } = useSelectedFile()
  const { register, handleSubmit, control, formState: { errors } } = useForm<RefundType>()
  const [receipt, setReceiptFile] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  function toastError(message: string) {
    return (
      toast.error(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    )
  }

  const onSubmit: SubmitHandler<RefundType> = async (data: RefundType) => {
    setSubmitted(true) 

    if (!receipt) {
      toastError("Selecione um comprovante!")
      return
    }

    const uploadResponse = await ApiReceipts.upload(receipt!)
    const receiptId = uploadResponse.data.receipt.id

    const refundData = {
      title: data.title,
      category: data.category,
      value: data.value,
      receipt: receiptId
    }

    try {
      await ApiRefunds.postCreate(refundData)

      toast.success('Cadastrado com sucesso!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      navigate("/")
    } catch (error) {
      console.log(error)

      toastError("Erro ao cadastrar!")
    }
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

              <div>
                <Input title="VALOR" placeholder="0,00" className="w-38" {...register("value", { valueAsNumber: true, required: "Obrigatório!" })} />
                {errors.value && <span className="text-green-200 text-sm">{errors.value.message}</span>}
              </div>
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
            {submitted && !receipt && <span className="text-green-200 text-sm -mt-5">Comprovante obrigatório</span>}

            <ButtonContainer text="Enviar" size="full" className="w-full" textColor="white" type="submit" 
              onClick={() => 
                setSubmitted(true)
              }
            />
          </div>
        </CardContainer>
      </div>
    </form>
  )
}
