import style from "./NotFound.module.css";
import img3 from "../assets/images/icon.png";

function NotFoundPage() {
  return (
    <div className={style.page}>
      <img src={img3} alt="img3" className={style.icon} />
      <h3>페이지를 찾을 수 없습니다</h3>
      <p>위에 주차장 예약 시스템을 클릭해주세요</p>
    </div>
  );
}

export default NotFoundPage;
