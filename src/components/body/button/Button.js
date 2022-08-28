import style from "./Button.module.css";

const Button = (props) => {
  const { text, ...buttonProps } = props;
  return (
    <div className={style.main}>
      <button className={style.buttons} {...buttonProps}>
        {text}
      </button>
    </div>
  );
};

export default Button;
