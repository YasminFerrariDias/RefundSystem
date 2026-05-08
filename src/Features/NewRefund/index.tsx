import { Alert } from "../../components/Alert";
import { ButtonContainer } from "../../components/Button/ButtonContainer/ButtonContainer";
import { CardContainer } from "../../components/CardContainer/CardContainer";
import { InputFile } from "../../components/FileComponents/InputFile";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select/Select";
import { Text } from "../../components/Text/Text";
import type { RequesType } from "../types/refundType";
import { useSelectedFile } from "./hooks/useSelectedFile";
import { useForm } from "react-hook-form"
import { type SubmitHandler, Controller } from "react-hook-form"

export function NewRefund() {
  const { hasFile, setHasFile } = useSelectedFile()
  const { register, handleSubmit, control } = useForm<RequesType>()
  const onSubmit: SubmitHandler<RequesType> = (data) => console.log(data)

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
            <Input title="NOME DA SOLICITAÇÃO" {...register("name")} />

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

              <Input title="VALOR" placeholder="0,00" className="w-38" {...register("amount")} />
            </div>

            <Alert textSize="2 MB" textFormat="PDF, PNG e JPEG" className={
              hasFile
                ? "hidden"
                : "opacity-100"
            }
            />

            <Controller
              name="receiptUrl"
              control={control}
              render={({ field }) => (
                <InputFile
                  title="COMPROVANTE"
                  onChange={(URL => {
                    handleFileChange()
                    field.onChange(URL)
                  })}
                />
              )}
            />

            <ButtonContainer text="Enviar" size="full" className="w-full" textColor="white" type="submit" />
          </div>
        </CardContainer>
      </div>
    </form>
  )
}


