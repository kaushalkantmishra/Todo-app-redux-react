import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "../components/Todo.css";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const submitHandler = (evt) => {
    evt.preventDefault();
    console.log(task);
    dispatch(addTodo(task));
    setTask("");
    // Clear input field after a short delay
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }, 100);
  };

  return (
    <div className="add-form-container">
      <form onSubmit={submitHandler}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} ref={inputRef} />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
