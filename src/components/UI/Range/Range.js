import classes from "./Range.module.css";

const Range = (props) => {
  return <input {...props} className={classes.range} type="range" />;
};

export default Range;
