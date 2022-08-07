import classes from "./Range.module.css";

const Range = (props) => {
  return (
    <input
      {...props}
      className={`${classes.range} + ${classes["range--" + props.color]}`}
      type="range"
    />
  );
};

export default Range;
