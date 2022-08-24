import { Component, Fragment } from "react";
import style from "./Input.module.css";
class Input extends Component {
  render() {
    return (
      <Fragment>
        <label htmlFor={this.props.id}>
          <h2>{this.props.text}</h2>
          <input className={style.input_style} {...this.props} />
          <p className={style.error_msg}>{this.props.error}</p>
        </label>
      </Fragment>
    );
  }
}

export default Input;
