import React from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { useState } from "react";
import "./style.css";

const TodoApp = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText("");
    }
  };

  return (
    <div className="todoApp">
      <InputField
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
};
export default TodoApp;
