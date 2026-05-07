import { Route, Routes } from "react-router-dom";
import { NewRefund } from "./Features/NewRefund";

import { DetailsRefund } from "./Features/DetailsRefund";

export function App() {

  return (
    <div className="bg-gray-400 h-full" >
      <Routes>
        {/*<Route path='/' element={<RefundList />} />*/}
        <Route path='/' element={<DetailsRefund />} />
        <Route path='/NewRefund' element={<NewRefund />} />
      </Routes>
    </div>
  )
}
