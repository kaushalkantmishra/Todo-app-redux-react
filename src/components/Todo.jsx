import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import "../components/Todo.css";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    console.log("delete", id);
    dispatch(deleteTodo(id));
  };

  const checkboxHandler = (id) => {
    console.log("mark as done", id);
    dispatch(markAsDone(id));
  };
  return (
    <div className="todo-container">
      <h2 className="todo-heading">My Todo App</h2>
      <AddForm />
      <hr />
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => checkboxHandler(todo.id)}
            />
            <div className="input-task">{todo.task}</div>

            <button onClick={() => clickHandler(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
