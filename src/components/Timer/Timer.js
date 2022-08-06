import { useEffect, useState } from "react";
import classes from "./Timer.module.css";
import { useContext } from "react";
import { Context } from "../../store/context";
import Range from "../UI/Range/Range";
import useInput from "../../hooks/useInput";

const formatSeconds = (totalSeconds) => {
  const minutes = Math.trunc(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const Timer = () => {
  const { breakMinutes, sessionMinutes, addPomodoro } = useContext(Context);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState();
  const [isBreak, setIsBreak] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [rangeProps, { setValue: setRangeValue }] = useInput(sessionMinutes);
  const { value: minuteInputValue } = rangeProps;

  useEffect(() => {
    if (seconds === minuteInputValue * 60) {
      if (!isBreak) addPomodoro({ minutes: +minuteInputValue });
      clearInterval(timer);
      setTimer(null);
      setIsBreak((prevIsBreak) => !prevIsBreak);
      setIsFinished(true);
      setSeconds(0);
    }
  }, [minuteInputValue, seconds, timer]);

  useEffect(() => {
    setRangeValue(isBreak ? breakMinutes : sessionMinutes);
  }, [isBreak]);

  const clickHandler = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
      return;
    }
    setIsFinished(false);
    setSeconds((prevSeconds) => prevSeconds + 1);
    setTimer(
      setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1)
    );
  };

  return (
    <div className={classes.container}>
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
        <Range {...rangeProps} min="1" max={isBreak ? 45 : 90} />
        <button onClick={clickHandler}>
          {timer ? "Stop" : "Start"} {isBreak ? "Break" : "Pomodoro"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
