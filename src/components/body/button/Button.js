import { Component } from "react";
import style from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <div className={style.main}>
        <button className={style.buttons} {...this.props}>
          {this.props.text}
        </button>
      </div>
    );
  }
}
export default Button;
