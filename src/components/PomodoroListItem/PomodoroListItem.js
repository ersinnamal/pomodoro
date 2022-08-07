import { useContext } from "react";
import { Context } from "../../store/context";
import classes from "./PomodoroListItem.module.css";

const PomodoroListItem = (props) => {
  const { deletePomodoro } = useContext(Context);

  return (
    <div
      className={`${classes.item} ${classes["item--" + props.pomodoro.color]}`}
    >
      <div className={classes.group}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes.icon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
        {props.pomodoro.title}
      </div>
      <div className={classes.right}>
        <div className={classes.group}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes.icon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {props.pomodoro.minutes} mins
        </div>
        <button
          onClick={deletePomodoro.bind(null, props.pomodoro.id)}
          className={classes.button}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes.icon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PomodoroListItem;
