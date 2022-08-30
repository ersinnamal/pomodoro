import { useContext, useState } from "react";
import { Context } from "../../store/context";
import PomodoroListItem from "../PomodoroListItem/PomodoroListItem";
import Button from "../UI/Button/Button";
import classes from "./PomodoroList.module.css";

const PomodoroList = () => {
  const { pomodoros, categories } = useContext(Context);
  const [selectedCategory, setSelectedCategory] = useState();

  const toggleCategorySelection = (catId) => {
    if (selectedCategory === catId) return setSelectedCategory(null);
    setSelectedCategory(catId);
  };

  return (
    <>
      <ul className={classes["list-category"]}>
        {categories.map((cat) => (
          <li key={cat.id}>
            <Button
              color={cat.color}
              onClick={toggleCategorySelection.bind(null, cat.id)}
            >
              {cat.name}
            </Button>
          </li>
        ))}
        <Button>Add Category</Button>
      </ul>
      <ul className={classes.list}>
        {pomodoros.map((pomo) => (
          <PomodoroListItem key={pomo.id} pomodoro={pomo} />
        ))}
      </ul>
    </>
  );
};
export default PomodoroList;
