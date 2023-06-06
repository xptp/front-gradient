import React from "react";
import "../style/footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <img
        className="img-footer footer-box"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMM7QM94vWNQTitx4Qq6O9Rab9KrpB69BdcSN7Cp0IeFGqNIK_mV48cqk1sXW4M9bKF8Q&usqp=CAU"
        alt="error img"
      />
      <div className="info-footer footer-box">
        <div className="info-item">Имя ФАмилия</div>
        <div className="info-item">Номер телефона</div>
      </div>
    </div>
  );
};

export default Footer;
