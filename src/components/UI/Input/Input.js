import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${classes.container} ${props.vertical && classes.vertical}`}
    >
      {props.label && <label className={classes.label}>{props.label}</label>}
      <input className={classes.input} {...props} />
    </div>
  );
};

export default Input;
