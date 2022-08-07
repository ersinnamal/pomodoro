import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <span className={classes.logo}>POMODORO</span>
    </header>
  );
};

export default MainHeader;
