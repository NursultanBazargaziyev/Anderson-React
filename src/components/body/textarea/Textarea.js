import { Component } from "react";
import style from "./textarea.module.css";

class Textarea extends Component {
  render() {
    return (
      <div className={style.textarea}>
        <label htmlFor={this.props.id}>
          <h3>{this.props.text}</h3>
        </label>
        <textarea
          className={style.input_style}
          max-cols="30"
          rows="7"
          maxLength={470}
          {...this.props}
        />
        <p className={style.counter}>{this.props.counter}/470</p>
      </div>
    );
  }
}

export default Textarea;
