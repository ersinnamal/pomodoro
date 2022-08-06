import { createContext, useState } from "react";

export const Context = createContext({
  breakMinutes: 0,
  sessionMinutes: 0,
  pomodoros: [],
  addPomodoro: (pomodoro) => {},
});

const ContextProvider = (props) => {
  const [breakMinutes, setBreakMinutes] = useState(0.2);
  const [sessionMinutes, setSessionMinutes] = useState(0.1);
  const [pomodoros, setPomodoros] = useState([]);

  const addPomodoro = (pomodoro) => {
    setPomodoros((prev) => [...prev, pomodoro]);
  };

  return (
    <Context.Provider
      value={{
        breakMinutes,
        sessionMinutes,
        pomodoros,
        addPomodoro,
        setBreakMinutes,
        setSessionMinutes,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
