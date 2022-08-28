import style from "./textarea.module.css";

const Textarea = (props) => {
  const { value, error, ...textareaProps } = props;
  return (
    <label className={style.textarea} htmlFor={props.id}>
      <h3>{props.text}</h3>
      <textarea
        className={style.input_style}
        max-cols="30"
        rows="7"
        maxLength={470}
        {...textareaProps}
      />
      <p className={style.counter}>{value.length}/470</p>
      <p className={style.error_msg}>{error}</p>
    </label>
  );
};
export default Textarea;
