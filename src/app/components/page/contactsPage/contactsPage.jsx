import React from "react";
import "../../../style/contants.scss";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
const ContactsPage = () => {
  return (
    // <div className="contants">
    //   <h2>Контакты</h2>
    //   <div>Телефон</div>
    //   <div>Почта</div>
    //   <div>Адрес</div>
    // </div>
    <div className="puff-container">
      <ThreeDots
        height="100"
        width="100"
        radius="9"
        color="#7e7a79"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default ContactsPage;
