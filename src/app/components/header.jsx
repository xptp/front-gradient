import React from "react";
import "../style/header.scss";
const Header = () => {
  return (
    <div className="header">
      <img
        className="box logo"
        src="https://thumb.tildacdn.com/tild6434-6631-4336-b762-666634343435/-/resize/430x/-/format/webp/Gradient_.png"
      />
      <div className="box info">
        <p>агент: Имя Фамилия</p>
        <br />
        <a href="tel">+8 (888) 888 888</a>
      </div>
    </div>
  );
};

export default Header;
