import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import Body from "./components/body/Body.js";
import Form from "./components/form/Form";

const initialState = {
  name: "",
  surname: "",
  date: "",
  phone: "",
  site: "",
  about: "",
  tech: "",
  description: "",
  nameError: "",
  surnameError: "",
  dateError: "",
  phoneError: "",
  siteError: "",
  aboutError: "",
  techError: "",
  descriptionError: "",
};

function App() {
  let [isValidated, setValidate] = useState(false);
  const [state, setState] = useState({ ...initialState });

  const startsWith = (value) => {
    if (!value.startsWith("https://")) {
      setState((prevState) => ({
        ...prevState,
        siteError: "Сайт должен начинаться с https://",
      }));
      return false;
    } else {
      setState((prevState) => ({
        ...prevState,
        siteError: "",
      }));
      return true;
    }
  };

  const checkUpperLetter = (name, value) => {
    if (value[0] !== value[0]?.toUpperCase()) {
      setState((prevState) => ({
        ...prevState,
        [name + "Error"]: "Поле должно начинаться с большой буквы",
      }));
      return false;
    } else {
      setState((prevState) => ({ ...prevState, [name + "Error"]: "" }));
      return true;
    }
  };

  const isFullNumber = (value) => {
    if (value.includes("_")) {
      setState((prevState) => ({
        ...prevState,
        phoneError: "Номер должен быть заполнен",
      }));
      return false;
    } else {
      setState((prevState) => ({ ...prevState, phoneError: "" }));
      return true;
    }
  };

  const onSubmit = () => {
    const error = "Обязательное поле";
    let validate = true;
    let validateFields = true;
    validateFields = checkUpperLetter("name", state.name);
    validateFields = startsWith(state.site);
    validateFields = checkUpperLetter("surname", state.surname);
    validateFields = isFullNumber(state.phone);
    if (!state.name) {
      setState((prevState) => ({ ...prevState, nameError: error }));
      validate = false;
    }

    if (!state.surname) {
      setState((prevState) => ({ ...prevState, surnameError: error }));
      validate = false;
    }

    if (!state.date) {
      setState((prevState) => ({ ...prevState, dateError: error }));
      validate = false;
    }
    if (!state.phone) {
      setState((prevState) => ({ ...prevState, phoneError: error }));
      validate = false;
    }

    if (!state.site) {
      setState((prevState) => ({ ...prevState, siteError: error }));
      validate = false;
    }

    if (!state.about) {
      setState((prevState) => ({ ...prevState, aboutError: error }));
      validate = false;
    }
    if (!state.tech) {
      setState((prevState) => ({ ...prevState, techError: error }));
      validate = false;
    }
    if (!state.description) {
      setState((prevState) => ({ ...prevState, descriptionError: error }));
      validate = false;
    }
    if (validate && validateFields) {
      setValidate((isValidated = true));
    }
  };

  const validationInput = (name, value) => {
    switch (name) {
      case "name":
        return checkUpperLetter(name, value);
      case "surname":
        return checkUpperLetter(name, value);
      case "site":
        console.log(value);
        return startsWith(value);
      case "phone":
        return isFullNumber(value);
      default:
        return false;
    }
  };

  return (
    <div className="App">
      <Header />
      <Body
        style={isValidated ? "validated" : "notValidated"}
        isValidated={isValidated}
        state={state}
        setState={setState}
        onSubmit={onSubmit}
        setValidate={setValidate}
        startsWith={startsWith}
        checkUpperLetter={checkUpperLetter}
        isFullNumber={isFullNumber}
        validationInput={validationInput}
        initialState={initialState}
      />
      <Form style={isValidated ? "toShow" : "toNotShow"} user={state} />
    </div>
  );
}
export default App;
