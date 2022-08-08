import { useContext } from "react";
import { Context } from "../../store/context";
import ClockIcon from "../UI/Icons/ClockIcon";
import TagIcon from "../UI/Icons/TagIcon";
import TrashIcon from "../UI/Icons/TrashIcon";
import classes from "./PomodoroListItem.module.css";

const PomodoroListItem = (props) => {
  const { deletePomodoro } = useContext(Context);

  return (
    <div
      className={`${classes.item} ${classes["item--" + props.pomodoro.color]}`}
    >
      <TagIcon />
      <div className={classes.group}>{props.pomodoro.title}</div>
      <div className={classes.right}>
        <div className={classes.group}>
          <ClockIcon />
          {props.pomodoro.minutes} mins
        </div>
        <button
          onClick={deletePomodoro.bind(null, props.pomodoro.id)}
          className={classes.button}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default PomodoroListItem;
