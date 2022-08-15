import React from "react";
import todoSlice from "./todoSlice";
import inputField from "./components/inputField";
import TodoList from "./components/todoList";
// import { useDispatch } from "react-redux";

function todoApp() {
  // const dispatch = useDispatch();

  return (
    <div className="todoApp">
      <inputField />
      <todoList />
    </div>
  );
}
export default todoApp;
