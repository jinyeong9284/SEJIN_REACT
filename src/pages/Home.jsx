import styles from "./Home.module.css";
import ParkingSpot from "../components/ParkingSpot";
import ReservationNotice from "../components/ReservationNotice";
import parkingLotStatus from "../assets/DB/parkingLotData";
import { useState } from "react";
import { useParking } from "../context/ParkingContext";

function Home() {
  const [data] = useState(parkingLotStatus);
  // ContextAPI : 컴포넌트 트리 전체에 데이터를 제공
  const { selectedParking, selectParking, resetParking } = useParking();
  // ReservationNorice 컴포넌트가 상태 인지를 위해
  const [showNotice, setShowNotice] = useState(false);

  const handleSelect = (number, status) => {
    // 'available' 상태인 주차 공간 선택할 수 있도록
    if (status === "available") {
      selectParking(number); // 전역 상태로 업데이트
      setShowNotice(true);
    }
  };
  const handleCancel = () => {
    resetParking();
    setShowNotice(false);
  };
  return (
    <div className={styles.parkingLot}>
      {data.map(({ id, number, status }) =>
        id <= 9 ? (
          <ParkingSpot
            key={number}
            number={number}
            status={status}
            onSelect={() => handleSelect(number, status)}
            isSelected={selectedParking === number}
          />
        ) : (
          false
        )
      )}
      <div className={styles.status}></div>
      {data.map(({ id, number, status }) =>
        id >= 10 ? (
          <ParkingSpot
            key={number}
            number={number}
            status={status}
            onSelect={() => handleSelect(number, status)}
            isSelected={selectedParking === number}
          />
        ) : (
          false
        )
      )}

      {/* isSelected의 값이 true면 보임. && A의 조건이 참이여야 뒤의 값이 보임 */}
      {showNotice && <ReservationNotice onCancel={handleCancel} />}
    </div>
  );
}

export default Home;
