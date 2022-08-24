import React from "react";
import style from "./Body.module.css";
import Input from "./input/Input";
import Textarea from "./textarea/Textarea";
import Button from "./button/Button";
import InputMaskPhone from "./input/Input-mask";

const initialState = {
  name: "",
  surname: "",
  date: "",
  phone: "",
  site: "",
  about_counter: 0,
  about: "",
  tech_counter: 0,
  tech: "",
  description_counter: 0,
  description: "",
  errorMsg: "",
  errorSite: "",
  errorOnSubmit: "",
  nameError: "",
  dateError: "",
  phoneError: "",
  siteError: "",
  aboutError: "",
  techError: "",
  surnameError: "",
  descriptionError: "",
};

class Body extends React.Component {
  state = {
    name: "",
    surname: "",
    date: "",
    phone: "",
    site: "",
    about_counter: 0,
    about: "",
    tech_counter: 0,
    tech: "",
    description_counter: 0,
    description: "",
    errorMsg: "",
    errorSite: "",
    nameError: "",
    surnameError: "",
    dateError: "",
    phoneError: "",
    siteError: "",
    aboutError: "",
    techError: "",
    descriptionError: "",
  };
  handleFullnameSpellcheck = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      surnameError: "",
      nameError: "",
    });

    if (e.target.value[0] !== e.target.value[0].toUpperCase()) {
      this.setState({
        errorMsg: e.target.placeholder + " должно начинаться с большой буквы",
      });
    } else {
      console.log("test");
      this.setState({ errorMsg: "" });
    }
  };
  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name + "Error"]: "",
    });
  };
  handleCancel = (e) => {
    this.setState(initialState);
  };
  checkStartWith = (e) => {
    this.setState({ [e.target.name]: e.target.value, siteError: "" });
    if (!e.target.value.startsWith("https://")) {
      this.setState({ errorSite: "Сайт должен начинаться с https://" });
    } else {
      this.setState({ errorSite: "" });
    }
  };
  handleCount = (e) => {
    this.setState({
      [e.target.name + "_counter"]: e.target.value.length,
      [e.target.name]: e.target.value,
      [e.target.name + "Error"]: "",
    });
  };

  handleValidate = (e) => {
    let validate = true;
    if (!this.state.name) {
      this.setState({ nameError: "Имя обязательное поле" });
      validate = false;
    }
    if (!this.state.surname) {
      this.setState({ surnameError: "Фамилия обязательное поле" });
      validate = false;
    }
    if (!this.state.date) {
      validate = false;
      this.setState({ dateError: "Дата Рождения обязательное поле" });
    }
    if (!this.state.phone) {
      validate = false;
      this.setState({ phoneError: "Телефон обязательное поле" });
    }
    if (!this.state.site) {
      validate = false;
      this.setState({ siteError: "Сайт обязательное поле" });
    }
    if (!this.state.about) {
      validate = false;
      this.setState({ aboutError: "О себе обязательное поле" });
    }
    if (!this.state.tech) {
      validate = false;
      this.setState({ techError: "Технологии обязательное поле" });
    }
    if (!this.state.description) {
      validate = false;
      this.setState({ descriptionError: "Технологии обязательное поле" });
    }

    if (validate) {
      console.log("works");
      document.getElementById("body_inputs").style.display = "none";
      document.getElementById("main").style.display = "none";

      document.getElementById("afterSubmit").style.display = "flex";
    }
  };

  render() {
    return (
      <div id="body" className={style.Body}>
        <div id="body_inputs" className={style.body_inputs}>
          <ul className={style.input_item}>
            <li className="input_item">
              <Input
                id="item_name"
                text="Имя"
                placeholder="Имя"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleFullnameSpellcheck}
                error={this.state.errorMsg}
              />
              <p className={style.error_msg}>{this.state.nameError}</p>
            </li>
            <li className="input_item">
              <Input
                id="item_sruname"
                placeholder="Фамилия"
                text="Фамилия"
                type="text"
                name="surname"
                value={this.state.surname}
                onChange={this.handleFullnameSpellcheck}
                error={this.state.errorMsg}
              />
              <p className={style.error_msg}>{this.state.surnameError}</p>
            </li>
            <li className="input_item">
              <Input
                id="item_date"
                type="date"
                name="date"
                text="Дата Рождения"
                value={this.state.date}
                placeholder="Дата Рождения"
                onChange={this.handleChange}
              />
              <p className={style.error_msg}>{this.state.dateError}</p>
            </li>
            <li className="input_item">
              <InputMaskPhone
                mask="+7-9999-99-99"
                text="Телефон"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                placeholder="Телефон"
              />
              <p className={style.error_msg}>{this.state.phoneError}</p>
            </li>
            <li className="input_item">
              <Input
                id="item_site"
                text="Сайт"
                type="text"
                placeholder="Сайт"
                onChange={this.checkStartWith}
                name="site"
                value={this.state.site}
                error={this.state.errorSite}
              />
              <p className={style.error_msg}>{this.state.siteError}</p>
            </li>
            <li className="input_item">
              <Textarea
                id="item_about"
                text="О себе"
                name="about"
                value={this.state.about}
                counter={this.state.about_counter}
                placeholder="О себе"
                onChange={this.handleCount}
              />
              <p className={style.error_msg}>{this.state.aboutError}</p>
            </li>
            <li className="input_item">
              <Textarea
                id="item_tech"
                text="Технологии"
                value={this.state.tech}
                name="tech"
                counter={this.state.tech_counter}
                placeholder="Технологии"
                onChange={this.handleCount}
              />
              <p className={style.error_msg}>{this.state.techError}</p>
            </li>
            <li className="input_item">
              <Textarea
                id="item_last"
                text="Описание проекта"
                name="description"
                value={this.state.description}
                counter={this.state.description_counter}
                placeholder="Описание проекта"
                onChange={this.handleCount}
              />
              <p className={style.error_msg}>{this.state.descriptionError}</p>
            </li>
          </ul>
        </div>
        <div id="main" className={style.main}>
          <Button text="Отмена" id="cancel" onClick={this.handleCancel} />
          <Button text="Сохранить" id="save" onClick={this.handleValidate} />
        </div>
        <div id="afterSubmit" className={style.afterSubmit}>
          <h2 className="header">Твоя анекта</h2>
          <div className={style.form}>
            <div className={style.fullname}>
              <h3 className={style.header_style}>Имя:</h3>
              <p>{this.state.name}</p>
            </div>
            <div className={style.fullname}>
              <h3 className={style.header_style}>Фамилия:</h3>
              <p>{this.state.surname}</p>
            </div>
            <div className={style.fullname}>
              <h3 className={style.header_style}>Дата:</h3>
              <p>{this.state.date}</p>
            </div>
            <div className={style.fullname}>
              <h3 className={style.header_style}>Телефон:</h3>
              <p>{this.state.phone}</p>
            </div>
            <div className={style.fullname}>
              <h3 className={style.header_style}>Сайт:</h3>
              <p>{this.state.site}</p>
            </div>
            <div className={style.additional}>
              <h3 className={style.header_style}>О себе:</h3>
              <p>{this.state.about}</p>
            </div>
            <div className={style.additional}>
              <h3 className={style.header_style}>Технологии:</h3>
              <p>{this.state.name}tech</p>
            </div>
            <div className={style.additional}>
              <h3 className={style.header_style}>Описание:</h3>
              <p>{this.state.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
