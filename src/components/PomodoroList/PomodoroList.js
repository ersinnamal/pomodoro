import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/context";
import CategoryList from "../CategoryList/CategoryList";
import PomodoroListItem from "../PomodoroListItem/PomodoroListItem";
import classes from "./PomodoroList.module.css";

const PomodoroList = () => {
  const { pomodoros } = useContext(Context);
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <div className={classes.container}>
      <CategoryList
        currentCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <ul className={classes.list}>
        {pomodoros.map((pomo) => (
          <PomodoroListItem key={pomo.id} pomodoro={pomo} />
        ))}
      </ul>
    </div>
  );
};
export default PomodoroList;
