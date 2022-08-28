import React from "react";
import plus from "./icons8-plus.svg";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.Header}>
      <img className={style.header_add} src={plus} alt="Add" />
      <h2 className="header_title">Add new form</h2>
    </div>
  );
};

export default Header;
