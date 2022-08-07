import { useState } from "react";
import classes from "./Select.module.css";

const Select = (props) => {
  const [showOptions, setShowOptions] = useState(false);

  const showOptionsHandler = () => {
    setShowOptions((prev) => !prev);
  };

  const selectHandler = (opt) => {
    setShowOptions(false);
    props.onChange({ target: { value: opt } });
  };

  return (
    <div className={classes.container}>
      {props.label && <label>{props.label}</label>}
      <div
        onClick={showOptionsHandler}
        className={`${classes.select} ${
          showOptions ? classes["select--open"] : ""
        }`}
      >
        {props.value ?? ""}
      </div>
      {showOptions && (
        <ul className={classes.options}>
          {props.options.map((opt) => (
            <li
              className={classes.option}
              onClick={selectHandler.bind(null, opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
