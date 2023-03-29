import { Ingredient } from "../types/Ingredient";
import { IngredientList } from "../types/IngredientList";
import { Cocktail } from "../types/Cocktail";
import { CocktailList } from "../types/CocktailList";

const baseUrl = `https://www.thecocktaildb.com/api/json/v1`;

export async function fetchCocktailIngredients(ingredientName: string): Promise<Ingredient[]> {
  var ingredientUrl = `${baseUrl}/1/search.php?i=${ingredientName}`;
  var response = await fetchApiResponse(ingredientUrl);

  return new IngredientList({json: response}).ingredients;
}

export async function fetchCocktails(cocktailName: string): Promise<Cocktail[]> {
  var cocktailUrl = `${baseUrl}/1/search.php?s=${cocktailName}`;
  var response = await fetchApiResponse(cocktailUrl);

  return new CocktailList({json: response}).cocktails;
}

async function fetchApiResponse(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.text();
}
