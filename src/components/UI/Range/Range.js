import classes from "./Range.module.css";

const Range = (props) => {
  return (
    <div className={classes.container}>
      {props.label && <label className={classes.label}>{props.label}</label>}

      <input
        {...props}
        className={`${classes.range} + ${classes["range--" + props.color]}`}
        type="range"
      />
    </div>
  );
};

export default Range;
