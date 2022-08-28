import React from "react";
import style from "./Body.module.css";
import Input from "./input/Input";
import Textarea from "./textarea/Textarea";
import Button from "./button/Button";
import InputMaskPhone from "./input/Input-mask";

const Body = (props) => {
  const setState = props.setState;
  const validationInput = props.validationInput;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
      [name + "Error"]: "",
    }));
    validationInput(name, value);
  };

  const clearState = () => {
    setState({ ...props.initialState });
  };

  return (
    <div id="body" className={props.style}>
      <div id="body_inputs" className={style.body_inputs}>
        <ul className={style.input_item}>
          <li className="input_item">
            <Input
              id="item_name"
              type="text"
              text="Имя"
              name="name"
              value={props.state.name}
              placeholder="Имя"
              onChange={handleChange}
              error={props.state.nameError}
            />
          </li>
          <li className="input_item">
            <Input
              id="item_sruname"
              type="text"
              text="Фамилия"
              name="surname"
              value={props.state.surname}
              placeholder="Фамилия"
              onChange={handleChange}
              error={props.state.surnameError}
            />
          </li>
          <li className="input_item">
            <Input
              id="item_date"
              type="date"
              name="date"
              text="Дата Рождения"
              value={props.state.date}
              placeholder="Дата Рождения"
              onChange={handleChange}
              error={props.state.dateError}
            />
          </li>
          <li className="input_item">
            <InputMaskPhone
              id="item_phone"
              type="phone"
              text="Телефон"
              name="phone"
              value={props.state.phone}
              placeholder="Телефон"
              onChange={handleChange}
              mask="+7-9999-99-99"
              error={props.state.phoneError}
            />
          </li>
          <li className="input_item">
            <Input
              id="item_site"
              type="text"
              text="Сайт"
              name="site"
              value={props.state.site}
              placeholder="Сайт"
              onChange={handleChange}
              error={props.state.siteError}
            />
          </li>
          <li className="input_item">
            <Textarea
              id="item_about"
              text="О себе"
              name="about"
              value={props.state.about}
              placeholder="О себе"
              onChange={handleChange}
              error={props.state.aboutError}
            />
          </li>
          <li className="input_item">
            <Textarea
              id="item_tech"
              text="Технологии"
              name="tech"
              value={props.state.tech}
              placeholder="Технологии"
              onChange={handleChange}
              error={props.state.techError}
            />
          </li>
          <li className="input_item">
            <Textarea
              id="item_last"
              text="Описание проекта"
              name="description"
              value={props.state.description}
              placeholder="Описание проекта"
              onChange={handleChange}
              error={props.state.descriptionError}
            />
          </li>
        </ul>
      </div>
      <div id="main" className={style.main}>
        <Button text="Отмена" id="cancel" onClick={clearState} />
        <Button text="Сохранить" id="save" onClick={props.onSubmit} />
      </div>
    </div>
  );
};

export default Body;
