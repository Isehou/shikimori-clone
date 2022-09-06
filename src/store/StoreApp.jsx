import React from "react";
import InputField from "./components/todos/InputField";
import TodoList from "./components/todos/TodoList";
import { useDispatch } from "react-redux";
import { addTodo, fetchTodos } from "./slices/todoSlice";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import "./store.css";
import { fetchRecipes, recipesSelector } from "./slices/recipesSlice";
import Recipes from "./components/Recipes";
import AnimeItems from "./components/AnimeItems";

const StoreApp = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  // const { status, error } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  // todos ....
  // const handleAction = () => {
  //   if (text.trim().length) {
  //     dispatch(addTodo({ text }));
  //     setText("");
  //   }
  // };

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div className="home__page">
      <div className="wrapper">
        <div className="element__list">
          <AnimeItems></AnimeItems>
          {/* <Recipes></Recipes> */}
        </div>
      </div>
    </div>
  );
};
export default StoreApp;

/* todos
<InputField
  value={text}
  updateText={setText}
  handleAction={handleAction}
/>
{status === "loading" && <h2>Loading</h2>}
{error && <h2>404: {error}</h2>}
<TodoList /> */
