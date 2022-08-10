import { useContext } from "react";
import { Context } from "../../store/context";
import PomodoroListItem from "../PomodoroListItem/PomodoroListItem";
import classes from "./PomodoroList.module.css";

const PomodoroList = () => {
  const { pomodoros, categories } = useContext(Context);
  return (
    <>
      <ul className={classes["list-category"]}></ul>
      <ul className={classes.list}>
        {pomodoros.map((pomo) => (
          <PomodoroListItem key={pomo.id} pomodoro={pomo} />
        ))}
      </ul>
    </>
  );
};
export default PomodoroList;
