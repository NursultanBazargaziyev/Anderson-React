import React from "react";
import style from "./Form.module.css";
const Form = (props) => {
  return (
    <div id="afterSubmit" className={props.style}>
      <h2 className="header">Твоя анекта</h2>
      <div className={style.form}>
        <div className={style.fullname}>
          <h3 className={style.header_style}>Имя:</h3>
          <p>{props.user.name}</p>
        </div>
        <div className={style.fullname}>
          <h3 className={style.header_style}>Фамилия:</h3>
          <p>{props.user.surname}</p>
        </div>
        <div className={style.fullname}>
          <h3 className={style.header_style}>Дата:</h3>
          <p>{props.user.date}</p>
        </div>
        <div className={style.fullname}>
          <h3 className={style.header_style}>Телефон:</h3>
          <p>{props.user.phone}</p>
        </div>
        <div className={style.fullname}>
          <h3 className={style.header_style}>Сайт:</h3>
          <p>{props.user.site}</p>
        </div>
        <div className={style.additional}>
          <h3 className={style.header_style}>О себе:</h3>
          <p>{props.user.about}</p>
        </div>
        <div className={style.additional}>
          <h3 className={style.header_style}>Технологии:</h3>
          <p>{props.user.tech}</p>
        </div>
        <div className={style.additional}>
          <h3 className={style.header_style}>Описание:</h3>
          <p>{props.user.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
