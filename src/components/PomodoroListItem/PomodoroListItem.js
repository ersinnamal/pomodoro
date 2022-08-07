import classes from "./PomodoroListItem.module.css";

const PomodoroListItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.title}>{props.pomodoro.title}</div>
      <div className={classes.duration}>
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
    </div>
  );
};

export default PomodoroListItem;
