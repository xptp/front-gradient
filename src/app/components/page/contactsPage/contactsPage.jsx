import React from "react";
import "../../../style/contants.scss";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const ContactsPage = () => {
  return (
    <motion.div
      className="contants-main end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <h2 className="contants">Контакты</h2>
      <div className="contants">Телефон</div>
      <div className="contants">Почта</div>
      <div className="contants ">Адрес</div>
    </motion.div>
    // <div className="puff-container">
    //   <ThreeDots
    //     height="100"
    //     width="100"
    //     radius="9"
    //     color="#7e7a79"
    //     ariaLabel="three-dots-loading"
    //     wrapperStyle={{}}
    //     wrapperClassName=""
    //     visible={true}
    //   />
    // </div>
  );
};

export default ContactsPage;
