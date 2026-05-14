import { Route, Routes } from "react-router-dom";
import { NewRefund } from "./Features/NewRefund";
import { DetailsRefund } from "./Features/DetailsRefund";
import { RefundList } from "./Features/RefundList";
import { RequestSent } from "./Features/RequestSent";
import { AppProvider } from "./contexts/AppProvider";
import { Toast } from "./components/Toast";

export function App() {
  return (
    <AppProvider>
      <div className="bg-gray-400 h-full" >
        <Toast />
        <Routes>
          <Route path='/' element={<RefundList />} />
          <Route path='/NewRefund' element={<NewRefund />} />
          <Route path='/RequestSent' element={<RequestSent />} />
          <Route path='/DetailsRefund/:id' element={<DetailsRefund />} />
        </Routes>
      </div>
    </AppProvider>
  )
}
