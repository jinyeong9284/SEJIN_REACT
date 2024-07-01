import style from "./ParkingSpot.module.css";
import img from "../assets/images/carblue.png";

function ParkingSpot({ number, status, onSelect, isSelected }) {
  return (
    // 선택 상황에 따라 스타일 적용.(상태) ? styles.selected : ""
    <div className={style.wrapper}>
      <div
        className={`${style.parkingSpot} ${img} ${
          style[status]
        } ${isSelected} ${isSelected ? style.selected : ""}`}
        onClick={() => onSelect(number)}
      >
        <strong>{number}</strong>
      </div>
    </div>
  );
}

export default ParkingSpot;
