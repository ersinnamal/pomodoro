import { useContext } from "react";
import { Context } from "../../store/context";
import PomodoroListItem from "../PomodoroListItem/PomodoroListItem";
import classes from "./PomodoroList.module.css";

const PomodoroList = () => {
  const { pomodoros } = useContext(Context);

  return (
    <ul className={classes.list}>
      {pomodoros.map((pomo) => (
        <PomodoroListItem key={pomo.id} pomodoro={pomo} />
      ))}
    </ul>
  );
};
export default PomodoroList;
