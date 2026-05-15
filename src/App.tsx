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
          <Route path='/new-refund' element={<NewRefund />} />
          <Route path='/request-sent' element={<RequestSent />} />
          <Route path='/details-refund/:id' element={<DetailsRefund />} />
        </Routes>
      </div>
    </AppProvider>
  )
}
