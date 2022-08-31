import { useState, useContext } from "react";
import { Context } from "../../store/context";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import classes from "./CategoryList.module.css";
import useInput from "../../hooks/useInput";
import Select from "../UI/Select/Select";
import CheckIcon from "../UI/Icons/CheckIcon";
import CancelIcon from "../UI/Icons/CancelIcon";

const CategoryList = () => {
  const { categories, addCategory } = useContext(Context);
  const [selectedCategory, setSelectedCategory] = useState();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [newCategoryNameInputHook] = useInput("New Category");
  const [colorsInputHook] = useInput("red");

  const toggleCategorySelection = (catId) => {
    if (selectedCategory === catId) return setSelectedCategory(null);
    setSelectedCategory(catId);
  };

  const submitForm = (e) => {
    e.preventDefault();
    addCategory({
      name: newCategoryNameInputHook.value,
      color: colorsInputHook.value,
    });
    setIsButtonClicked(false);
  };

  return (
    <div className={classes.container}>
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
        <li>
          {!isButtonClicked && (
            <Button onClick={() => setIsButtonClicked(true)} color="grey">
              +
            </Button>
          )}
        </li>
      </ul>
      {isButtonClicked && (
        <form className={classes["category-form"]}>
          <Input {...newCategoryNameInputHook} label="name" />
          <Select
            {...colorsInputHook}
            label="color"
            options={["red", "blue"]}
          />
          <Button onClick={submitForm} color="grey">
            <CheckIcon />
          </Button>
          <Button onClick={() => setIsButtonClicked(false)} color="grey">
            <CancelIcon />
          </Button>
        </form>
      )}
    </div>
  );
};

export default CategoryList;
