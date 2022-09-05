import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { fetchRecipes, recipesSelector } from "../slices/recipesSlice";

const Recipes = () => {
  const dispatch = useDispatch();
  const { recipes, loading, hasErrors } = useSelector(recipesSelector);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const renderRecipes = () => {
    if (loading) return <p>Loading recipes...</p>;
    if (hasErrors) return <p>Cannot display recipes...</p>;

    return recipes.map((el, i) => (
      <div key={el.idMeal} className="tile">
        <h2>{el.strMeal}</h2>
        <img src={el.strMealThumb} alt="" />
      </div>
    ));
  };

  return (
    <section>
      <h1>Recipes</h1>
      <div className="content">{renderRecipes()}</div>
    </section>
  );
};

export default Recipes;
