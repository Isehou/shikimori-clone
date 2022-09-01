import React from "react";
import InputField from "./components/todos/InputField";
import TodoList from "./components/todos/TodoList";
import { useDispatch } from "react-redux";
import { addTodo, fetchTodos } from "./slices/todoSlice";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import "./store.css";

const StoreApp = () => {
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
export default StoreApp;
