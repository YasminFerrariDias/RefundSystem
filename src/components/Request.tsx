export function Request() {
  return (
    <div className="flex items-center gap-3 p-0 w-full">
      <div className="bg-gray-400 w-8.5 h-8.5 rounded-full">

      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <div className="text-sm font-bold">Rodrigo</div>
          <div className="text-xs text-gray-700">Alimentação</div>
        </div>
        <div className="flex items-center">
          <p>R$</p>
          <p>25,89</p>
        </div>
      </div>
    </div>
  )
}