// ContextAPT 설정
import { createContext, useContext, useState } from "react";

const ParkingContext = createContext();

// 적용시 사용
export const useParking = () => useContext(ParkingContext);

// 적용 범위 및 내용 설정
export const ParkingProvider = ({ children }) => {
  const [selectedParking, setSelectedParking] = useState(null);

  // 주차자리 선택 상태
  const selectParking = (spotNumber) => setSelectedParking(spotNumber);

  // 예약 정보 리셋
  const resetParking = () => setSelectedParking(null);

  return (
    <ParkingContext.Provider
      value={{ selectedParking, selectParking, resetParking }}
    >
      {children}
    </ParkingContext.Provider>
  );
};
