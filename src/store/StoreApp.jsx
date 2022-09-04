import React from "react";
import InputField from "./components/todos/InputField";
import TodoList from "./components/todos/TodoList";
import { useDispatch } from "react-redux";
import { addTodo, fetchTodos } from "./slices/todoSlice";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import "./store.css";
import { fetchAnimes } from "./slices/animeSlice";
import { fetchRecipes, recipesSelector } from "./slices/recipesSlice";
import Recipes from "./components/Recipes";
import AnimeItems from "./components/AnimeItems";

const StoreApp = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const { status, error } = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const { recipes, loading, hasErrors } = useSelector(recipesSelector);

  // todos ....
  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText("");
    }
  };

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  // const renderRecipes = () => {
  //   if (loading) return <p>Loading recipes...</p>;
  //   if (hasErrors) return <p>Cannot display recipes...</p>;

  //   return recipes.map((recipe) => (
  //     <div key={recipe.idMeal} className="tile">
  //       <h2>{recipe.strMeal}</h2>
  //       <img src={recipe.strMealThumb} alt="" />
  //     </div>
  //   ));
  // };

  return (
    <div className="todoApp">
      <AnimeItems></AnimeItems>
      <Recipes></Recipes>

      {/* <div className="button__block">
        <button
          className="btn"
          onClick={() => setPage((curr) => (curr === 1 ? 1 : curr - 1))}
        >
          Пред
        </button>
        <button className="btn" onClick={() => setPage((curr) => curr + 1)}>
          След
        </button>
      </div> */}
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
