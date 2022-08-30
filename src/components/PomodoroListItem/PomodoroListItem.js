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
  const { deletePomodoro, categories } = useContext(Context);
  const [isEdit, setIsEdit] = useState(false);

  const { color } = categories.find(
    (cat) => cat.name === props.pomodoro.category
  );

  return (
    <div className={`${classes.item} ${classes["item--" + color]}`}>
      {!isEdit && (
        <>
          <div className={classes.info}>
            <div className={classes.group}>
              <ClockIcon />
              {props.pomodoro.minutes} mins{" "}
            </div>
            <div className={classes.group}>
              <TagIcon />
              {props.pomodoro.title}
            </div>
          </div>
          <div className={classes.buttons}>
            <Button color={color} onClick={setIsEdit.bind(null, true)}>
              <PencilIcon />
            </Button>
            <Button
              color={color}
              onClick={deletePomodoro.bind(null, props.pomodoro.id)}
            >
              <TrashIcon />
            </Button>
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
