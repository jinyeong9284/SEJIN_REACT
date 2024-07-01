import { useNavigate } from "react-router-dom";
import style from "./Layout.module.css";
import img01 from "../assets/images/sejin.png";
// import styled from "../components/StyledCom1";

function Layout({ children }) {
  const nav = useNavigate();

  const handleClickHome = () => {
    nav("/");
  };
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.line}></div>
        <h1 onClick={handleClickHome} className={style.title}>
          주차장 예약 시스템
        </h1>
        <div className={style.flexwrapper}>
          <img src={img01} alt="sejin" className={style.sejin} />
          <p className={style.text}>
            세진브론즈빌
            <span className={style.textad}>
              경기도 수원시 팔달구 덕영대로 899 (우)16455
            </span>
          </p>
        </div>
        <main>{children}</main>
        <div className={style.choice}>
          <p>주차구역을 선택해주세요</p>
        </div>
      </div>
    </section>
  );
}

export default Layout;
