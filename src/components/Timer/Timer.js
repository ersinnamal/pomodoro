import { useEffect, useState } from "react";
import classes from "./Timer.module.css";
import { useContext } from "react";
import { Context } from "../../store/context";
import Range from "../UI/Range/Range";
import useInput from "../../hooks/useInput";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";

const formatSeconds = (totalSeconds) => {
  const minutes = Math.trunc(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const Timer = () => {
  const context = useContext(Context);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState();
  const [isBreak, setIsBreak] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [rangeProps, { setValue: setRangeValue }] = useInput(
    context.sessionMinutes
  );
  const [titleProps] = useInput();
  const [colorProps] = useInput("red");
  const { value: minuteInputValue } = rangeProps;
  const { value: colorInputValue } = colorProps;

  useEffect(() => {
    if (seconds === minuteInputValue * 60) {
      if (!isBreak)
        context.addPomodoro({
          title: titleProps.value,
          minutes: +minuteInputValue,
          color: colorInputValue,
        });
      clearInterval(timer);
      setTimer(null);
      setIsBreak((prevIsBreak) => !prevIsBreak);
      setIsFinished(true);
      setSeconds(0);
    }
  }, [minuteInputValue, seconds, timer, context, isBreak]);

  useEffect(() => {
    setRangeValue(isBreak ? context.breakMinutes : context.sessionMinutes);
  }, [isBreak, context.breakMinutes, context.sessionMinutes, setRangeValue]);

  const clickHandler = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
      return;
    }
    if (isBreak && context.breakMinutes !== minuteInputValue)
      context.setBreakMinutes(minuteInputValue);
    if (!isBreak && context.sessionMinutes !== minuteInputValue)
      context.setSessionMinutes(minuteInputValue);
    setIsFinished(false);
    setSeconds((prevSeconds) => prevSeconds + 1);
    setTimer(
      setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1)
    );
  };

  return (
    <div
      className={`${classes.container} ${
        classes["container--" + colorInputValue]
      }`}
    >
      <div className={classes.time}>
        {formatSeconds(minuteInputValue * 60 - seconds)}
      </div>
      <div className={classes.bar}>
        <div
          className={classes.fill}
          style={{
            width: `${
              isFinished ? 100 : (seconds / (minuteInputValue * 60)) * 100
            }%`,
          }}
        ></div>
      </div>
      <div className={classes.controls}>
        <Input {...titleProps} />
        <Range
          {...rangeProps}
          color={colorInputValue}
          min="1"
          max={isBreak ? 45 : 90}
        />
        <Select {...colorProps} options={["red", "blue"]} />
        <button onClick={clickHandler}>
          {timer ? "Stop" : "Start"} {isBreak ? "Break" : "Pomodoro"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
