import { Ingredient } from "../types/Ingredient";
import { IngredientList } from "../types/IngredientList";

const baseUrl = `https://www.thecocktaildb.com/api/json/v1`;

export async function fetchCocktailIngredients(ingredientName: string): Promise<Ingredient[]> {
  var ingredientUrl = `${baseUrl}/1/search.php?i=${ingredientName}`;
  var response = await fetchApiResponse(ingredientUrl);

  return new IngredientList({json: response}).ingredients;
}

async function fetchApiResponse(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.text();
}
