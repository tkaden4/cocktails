import React from "react";
import "./App.css";
import bohemianImage from "./drinks/absinthebuck/image.jpg";
import bohemian from "./drinks/absinthebuck/recipe.json";
import painkillerImage from "./drinks/painkiller/image.jpg";
import painkiller from "./drinks/painkiller/recipe.json";
import penicillinImage from "./drinks/penicillin/image.webp";
import penicillin from "./drinks/penicillin/recipe.json";
import pinkLadyImage from "./drinks/pinklady/image.webp";
import pinklady from "./drinks/pinklady/recipe.json";
import smokeMirrorsImage from "./drinks/smokemirrors/image.jpg";
import smokemirrors from "./drinks/smokemirrors/recipe.json";
import starCocktailImage from "./drinks/starcocktail/image.webp";
import starcocktail from "./drinks/starcocktail/recipe.json";
import { Recipe, RecipeProps } from "./Recipe";

const recipes: Array<RecipeProps> = [
  { ...bohemian, image_url: bohemianImage },
  { ...painkiller, image_url: painkillerImage },
  { ...penicillin, image_url: penicillinImage },
  { ...pinklady, image_url: pinkLadyImage },
  { ...smokemirrors, image_url: smokeMirrorsImage },
  { ...starcocktail, image_url: starCocktailImage },
];

console.log(recipes);

function App() {
  return (
    <div className="App">
      <div style={{ fontSize: "72px" }}>Cocktail List</div>
      {recipes.map((recipe, i) => (
        <>
          <hr key={2 * i} />
          <br />
          <Recipe {...recipe} key={2 * i + 1} />
          <br />
        </>
      ))}
    </div>
  );
}

export default App;
