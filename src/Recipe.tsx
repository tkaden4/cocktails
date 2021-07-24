import _ from "lodash";
import React from "react";
import "./Recipe.css";

export interface RecipeProps {
  image_url?: string;
  name: string;
  weirdness: number;
  ingredients: string[];
}

export function Recipe({ image_url, name, weirdness, ingredients }: RecipeProps) {
  return (
    <div className="recipe">
      <div className="recipe-image">
        {image_url === undefined ? <></> : <img src={image_url} width="100%" height="auto" alt={name}></img>}
      </div>
      <div className="recipe-content">
        <div className="recipe-title">
          <h1>{name}</h1>
          <div className="recipe-score">
            <h3>Alex's Weirdness Score:&nbsp;</h3>
            {_.range(0, weirdness).map((_no, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        </div>
        <div className="recipe-body">
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
