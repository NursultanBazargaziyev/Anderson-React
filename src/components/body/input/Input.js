import style from "./Input.module.css";

const Input = (props) => {
  const { text, error, ...inputProps } = props;
  return (
    <label htmlFor={props.id}>
      <h3>{text}</h3>
      <input className={style.input_style} {...inputProps} />
      <p className={style.error_msg}>{error}</p>
    </label>
  );
};

export default Input;
