import InputMask from "react-input-mask";
import style from "./Input.module.css";

const InputPhone = (props) => {
  const { error, text, ...inputProps } = props;
  return (
    <label htmlFor={props.id}>
      <h2>{props.text}</h2>
      <InputMask className={style.input_style} {...inputProps} />
      <p className={style.error_msg}>{props.error}</p>
    </label>
  );
};

export default InputPhone;
