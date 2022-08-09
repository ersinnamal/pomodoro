import { useContext, useState } from "react";
import { Context } from "../../store/context";
import EditPomodoro from "../EditPomodoro/EditPomodoro";
import Button from "../UI/Button/Button";
import ClockIcon from "../UI/Icons/ClockIcon";
import PencilIcon from "../UI/Icons/PencilIcon";
import TagIcon from "../UI/Icons/TagIcon";
import TrashIcon from "../UI/Icons/TrashIcon";
import classes from "./PomodoroListItem.module.css";

const PomodoroListItem = (props) => {
  const { deletePomodoro } = useContext(Context);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div
      className={`${classes.item} ${classes["item--" + props.pomodoro.color]}`}
    >
      {!isEdit && (
        <>
          <TagIcon />
          <div className={classes.group}>{props.pomodoro.title}</div>
          <div className={classes.right}>
            <div className={classes.group}>
              <ClockIcon />
              {props.pomodoro.minutes} mins
            </div>
            <div className={classes["right--buttons"]}>
              <Button
                color={props.pomodoro.color}
                onClick={setIsEdit.bind(null, true)}
              >
                <PencilIcon />
              </Button>
              <Button
                color={props.pomodoro.color}
                onClick={deletePomodoro.bind(null, props.pomodoro.id)}
              >
                <TrashIcon />
              </Button>
            </div>
          </div>
        </>
      )}
      {isEdit && (
        <EditPomodoro
          pomodoro={props.pomodoro}
          onClose={setIsEdit.bind(null, false)}
        />
      )}
    </div>
  );
};

export default PomodoroListItem;
