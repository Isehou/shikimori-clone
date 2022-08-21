import React from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { useDispatch } from "react-redux";
import { addTodo, fetchTodos } from "./todoSlice";
import { useState, useEffect } from "react";
import "./style.css";
import { useSelector } from "react-redux/es/exports";

const TodoApp = () => {
  const [text, setText] = useState("");
  const { status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText("");
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="todoApp">
      <InputField
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      {status === "loading" && <h2>Loading</h2>}
      {error && <h2>404: {error}</h2>}
      <TodoList />
    </div>
  );
};
export default TodoApp;
