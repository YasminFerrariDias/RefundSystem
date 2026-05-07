import { Route, Routes } from "react-router-dom";
import { NewRefund } from "./Features/NewRefund";
import { RefundList } from "./Features/RefundList";

export function App() {

  return (
    <div className="bg-gray-400 h-full" >
      <Routes>
        <Route path='/' element={<RefundList />} />
        <Route path='/NewRefund' element={<NewRefund />} />
      </Routes>
    </div>
  )
}
