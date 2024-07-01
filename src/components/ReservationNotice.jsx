import { useNavigate } from "react-router-dom";
import style from "./ReservationNotice.module.css";

function ReservationNotice({ onCancel }) {
  const nav = useNavigate();
  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <h2>예약시 주의사항</h2>
        <h3>세진브론즈빌 주차장 사용 안내</h3>
        <p className={style.content1}>
          [예약 기간]
          <br />
          세진 브론즈빌 주차장은 당일 예약 및 이용 서비스만을 제공합니다.
        </p>
        <p className={style.content}>
          [입차시간]
          <br />
          예약 시간 기준 30분 전후 까지는 예약변경 없이 입차가 가능합니다.
        </p>
        <p className={style.content}>
          [예약 변경 / 취소]
          <br />
          입차 예정 시간 1시간 전 예약한 경우 10분 이내에는 예약의 변경 및
          취소가 가능합니다.
        </p>
        <p className={style.content}>
          [주차요금]
          <br />
          입차 후 10분 이내 출차시 무료입니다.
        </p>

        <p className={style.price}>이용 요금</p>
        <p className={style.pricecontent}>(기본)1시간 ----------- 3,000원</p>
        <button onClick={() => nav("/reservation")}>확인했습니다</button>
        <button onClick={onCancel} className={style.buttonCancle}>
          취소하기
        </button>
      </div>
    </div>
  );
}

export default ReservationNotice;
