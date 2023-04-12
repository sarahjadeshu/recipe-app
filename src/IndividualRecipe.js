import React from "react";

function IndividualRecipe ({deleteRecipe, recipe}) {
  console.log(recipe.preparation)
  return (
      <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td><img src={recipe.photo} alt="recipe photo" ></img></td>
        <td className="content_td"><p>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
        <td><button name="delete" onClick={deleteRecipe} >Delete</button></td>
      </tr>
  )
}
      
export default IndividualRecipe;