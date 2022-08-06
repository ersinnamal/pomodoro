import { useEffect, useState } from "react";
import classes from "./Timer.module.css";

const POMODORO_MINS = 0.2;
const BREAK_MINS = 0.2;

const formatSeconds = (totalSeconds) => {
  const minutes = Math.trunc(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const Timer = () => {
  const [targetSeconds, setTargetSeconds] = useState(POMODORO_MINS * 60);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState();
  const [isBreak, setIsBreak] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (seconds === targetSeconds) {
      clearInterval(timer);
      setTimer(null);
      setIsBreak((prevIsBreak) => !prevIsBreak);
      setIsFinished(true);
      setSeconds(0);
    }
  }, [targetSeconds, seconds, timer]);

  useEffect(() => {
    if (isBreak) {
      setTargetSeconds(BREAK_MINS * 60);
    } else {
      setTargetSeconds(POMODORO_MINS * 60);
    }
  }, [isBreak]);

  const clickHandler = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    } else {
      setIsFinished(false);
      setSeconds((prevSeconds) => prevSeconds + 1);
      setTimer(
        setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000)
      );
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.time}>
        {formatSeconds(targetSeconds - seconds)}
      </div>
      <div className={classes.bar}>
        <div
          className={classes.fill}
          style={{
            width: `${isFinished ? 100 : (seconds / targetSeconds) * 100}%`,
          }}
        ></div>
      </div>
      <button onClick={clickHandler}>
        {timer ? "Stop" : "Start"} {isBreak ? "Break" : "Pomodoro"}
      </button>
    </div>
  );
};

export default Timer;
