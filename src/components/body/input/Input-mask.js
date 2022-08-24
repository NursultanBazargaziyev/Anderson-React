import { Component } from "react";
import InputMask from "react-input-mask";
import style from "./Input.module.css";
class InputPhone extends Component {
  render() {
    return (
      <>
        <label htmlFor={this.props.id}>
          <h2>{this.props.text}</h2>
          <InputMask className={style.input_style} {...this.props} />
          <p className={style.error_msg}>{this.props.error}</p>
        </label>
      </>
    );
  }
}

export default InputPhone;
