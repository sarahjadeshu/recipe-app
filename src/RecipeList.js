import React from "react";
import IndividualRecipe from "./IndividualRecipe";

function RecipeList({ recipes, setRecipes }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  
  const deleteRecipe = (indexToDelete) => 
    setRecipes((currentRecipes) => 
      currentRecipes.filter((oneRecipe, index) => index !== indexToDelete))

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <td className="center"><th>Name</th></td>
            <td className="center"><th>Cuisine</th></td>
            <td className="center"><th>Photo</th></td>
            <td className="center"><th>Ingredients</th></td>
            <td className="center"><th>Preparation</th></td>
            <td className="center"><th>Actions</th></td>
          </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, i) => (
          <IndividualRecipe deleteRecipe={() => deleteRecipe(i)} key={i} recipe={recipe} />))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
