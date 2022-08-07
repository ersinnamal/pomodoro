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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="2 1 20 20"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 13l-5 5m0 0l-5-5m5 5V6"
          />
        </svg>
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
