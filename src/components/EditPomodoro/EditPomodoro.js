import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import classes from "./EditPomodoro.module.css";
import useInput from "../../hooks/useInput";
import CheckIcon from "../UI/Icons/CheckIcon";
import { useContext } from "react";
import { Context } from "../../store/context";
import Button from "../UI/Button/Button";
import CancelIcon from "../UI/Icons/CancelIcon";

const EditPomodoro = (props) => {
  const [titleInputProps] = useInput(props.pomodoro.title);
  const [colorInputProps] = useInput(props.pomodoro.color);

  const { editPomodoro } = useContext(Context);

  const saveHandler = () => {
    editPomodoro(props.pomodoro.id, {
      title: titleInputProps.value,
      color: colorInputProps.value,
    });
    props.onClose();
  };

  return (
    <div className={classes.container}>
      <div className={classes.inputs}>
        <Input {...titleInputProps} label="title" />
        <Select {...colorInputProps} label="color" options={["red", "blue"]} />
      </div>
      <div className={classes.buttons}>
        <Button color={props.pomodoro.color} coloronClick={saveHandler}>
          <CheckIcon />
        </Button>
        <Button color={props.pomodoro.color} coloronClick={saveHandler}>
          <CancelIcon />
        </Button>
      </div>
    </div>
  );
};

export default EditPomodoro;
