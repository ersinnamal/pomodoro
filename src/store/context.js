import { createContext, useEffect, useState } from "react";

export const Context = createContext({
  breakMinutes: 0,
  sessionMinutes: 0,
  pomodoros: [],
  categories: [],
  addPomodoro: (pomodoro) => {},
  deletePomodoro: (pomodoro) => {},
});

const addItem = (setItems, item) => {
  setItems((prev) => [
    { ...item, id: prev.length !== 0 ? prev[0].id + 1 : 1 },
    ...prev,
  ]);
};

const deleteItem = (setItems, id) => {
  setItems((prev) => prev.filter((item) => item.id !== id));
};

const editItem = (setItems, id, editedItem) => {
  setItems((prev) => {
    const newItems = [...prev];
    const index = newItems.findIndex((item) => item.id === id);
    newItems[index] = { ...newItems[index], ...editedItem };
    return newItems;
  });
};

const ContextProvider = (props) => {
  const [breakMinutes, setBreakMinutes] = useState(
    localStorage.getItem("breakMinutes") ?? 1
  );
  const [sessionMinutes, setSessionMinutes] = useState(
    localStorage.getItem("sessionMinutes") ?? 1
  );
  const [pomodoros, setPomodoros] = useState(
    JSON.parse(localStorage.getItem("pomodoros")) ?? []
  );
  const [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem("categories")) ?? [
      { id: 1, name: "Deneme", color: "red" },
    ]
  );

  useEffect(() => {
    localStorage.setItem("pomodoros", JSON.stringify(pomodoros));
    localStorage.setItem("breakMinutes", breakMinutes);
    localStorage.setItem("sessionMinutes", sessionMinutes);
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [breakMinutes, sessionMinutes, pomodoros, categories]);

  const addPomodoro = addItem.bind(null, setPomodoros);
  const addCategory = addItem.bind(null, setCategories);
  const deletePomodoro = deleteItem.bind(null, setPomodoros);
  const deleteCategory = deleteItem.bind(null, setCategories);
  const editPomodoro = editItem.bind(null, setPomodoros);
  const editCategory = editItem.bind(null, setCategories);

  return (
    <Context.Provider
      value={{
        breakMinutes,
        sessionMinutes,
        pomodoros,
        categories,
        addPomodoro,
        addCategory,
        deletePomodoro,
        deleteCategory,
        editPomodoro,
        editCategory,
        setBreakMinutes,
        setSessionMinutes,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
