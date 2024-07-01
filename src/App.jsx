import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ReservationForm from "./pages/ReservationForm";
import Confirmation from "./pages/Confirmation";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import { ParkingProvider } from "./context/ParkingContext";

function App() {
  return (
    <ParkingProvider>
      <Layout>
        {/* 이동을 위한 경로 설정 */}
        <Routes>
          {/* <Route path="/주소창의 경로"  element={<이동할 컴포넌트명/>}/> */}
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<ReservationForm />} />
          <Route path="/confirm" element={<Confirmation />} />
          {/* 지정된 경로 외의 접근시 보임. 반드시 모든 경로 제일 아래에 작성 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </ParkingProvider>
  );
}

export default App;
