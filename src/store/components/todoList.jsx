import TodoItem from "./todoItem";
import { useSelector } from "react-redux/es/exports";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem />
      ))}
    </ul>
  );
}
