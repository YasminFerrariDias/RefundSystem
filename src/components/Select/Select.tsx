export function Select() {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="">CATEGORIA</label>
      <div className="bg-white border-gray-300 border rounded-lg p-3 gap-2 flex flex-col">
        <span>Selecione</span>
      </div>
      <div className="bg-white border-gray-300 border rounded-lg p-3 gap-2 flex flex-col">
        <div className="p-1 focus:bg-gray-100 focus:font-bold cursor-pointer rounded">
          <span>Alimentação</span>
        </div>
        <div className="p-1"><span>Hospedagem</span></div>
        <div className="p-1"><span>Transporte</span></div>
        <div className="p-1"><span>Serviços</span></div>
        <div className="p-1"><span>Outros</span></div>
      </div>
    </div>
  )
}