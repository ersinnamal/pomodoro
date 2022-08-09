import { createContext, useEffect, useState } from "react";

export const Context = createContext({
  breakMinutes: 0,
  sessionMinutes: 0,
  pomodoros: [],
  addPomodoro: (pomodoro) => {},
  deletePomodoro: (pomodoro) => {},
});

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

  useEffect(() => {
    localStorage.setItem("pomodoros", JSON.stringify(pomodoros));
    localStorage.setItem("breakMinutes", breakMinutes);
    localStorage.setItem("sessionMinutes", sessionMinutes);
  }, [breakMinutes, sessionMinutes, pomodoros]);

  const addPomodoro = (pomodoro) => {
    setPomodoros((prev) => [
      { ...pomodoro, id: pomodoros.length !== 0 ? pomodoros[0].id + 1 : 1 },
      ...prev,
    ]);
  };

  const deletePomodoro = (pomodoroId) => {
    setPomodoros((prev) => prev.filter((pomo) => pomo.id !== pomodoroId));
  };

  const editPomodoro = (pomodoroId, editedPomodoro) => {
    console.log(editedPomodoro);
    setPomodoros((prev) => {
      const newPomodoros = [...prev];
      const index = newPomodoros.findIndex((p) => p.id === pomodoroId);
      newPomodoros[index] = { ...newPomodoros[index], ...editedPomodoro };
      return newPomodoros;
    });
  };

  return (
    <Context.Provider
      value={{
        breakMinutes,
        sessionMinutes,
        pomodoros,
        addPomodoro,
        deletePomodoro,
        editPomodoro,
        setBreakMinutes,
        setSessionMinutes,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
