import { useState, useContext } from "react";
import { Context } from "../../store/context";
import Button from "../UI/Button/Button";
import classes from "./CategoryList.module.css";

const CategoryList = () => {
  const { categories } = useContext(Context);
  const [selectedCategory, setSelectedCategory] = useState();

  const toggleCategorySelection = (catId) => {
    if (selectedCategory === catId) return setSelectedCategory(null);
    setSelectedCategory(catId);
  };

  return (
    <ul className={classes.list}>
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
      <Button>+</Button>
    </ul>
  );
};

export default CategoryList;
