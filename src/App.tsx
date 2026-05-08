import { Route, Routes } from "react-router-dom";
import { NewRefund } from "./Features/NewRefund";

import { DetailsRefund } from "./Features/DetailsRefund";
import { RefundList } from "./Features/RefundList";
import { RequestSent } from "./Features/RequestSent";

export function App() {

  return (
    <div className="bg-gray-400 h-full" >
      <Routes>
        <Route path='/' element={<RefundList />} />
        <Route path='/NewRefund' element={<NewRefund />} />
        <Route path='/RequestSent' element={<RequestSent />} />
        <Route path='/DetailsRefund' element={<DetailsRefund />} />
        <Route path='/DetailsRefund/:id' element={<DetailsRefund />} />
      </Routes>
    </div>
  )
}
