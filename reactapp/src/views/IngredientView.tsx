import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { fetchCocktailIngredients } from '../backend/cocktailApi'
import { Ingredient } from '../types/Ingredient';
import { SearchByNameView } from './SearchByNameView';
import { IngredientResponseView } from './IngredientResponseView';

export function IngredientView() {
  const [ingredientName, setIngredientName] = useState("");
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(true);
  const [ingredientResponse, setIngredientResponse] = useState<Ingredient[]>([]);

  var searchForIngredients = async (e: React.MouseEvent<HTMLElement>) => {
    if (ingredientName) {
      const ingredients : Ingredient[] = await fetchCocktailIngredients(ingredientName);
      if (ingredients && ingredients.length > 0) {
        setIngredientResponse(ingredients);
        console.log("Retrieved ingredients!");
      }
      else {
        console.error("There was a problem retrieving ingredients.");
      }
    }
    else {
      const error: string = "Ingredient Name was not set! Cannot search for blank ingredients.";
      console.error(error);
    }
  }

  return (
    <>
    <SearchByNameView
      id="get-ingredient-by-name-id"
      label="Ingredient Name"
      description="Provide the name of an Ingredient, then select the 'Search' button."
      helperText="Sample values include 'Peach', 'Vodka', and so on."
      entryName={ingredientName}
      setEntryName={setIngredientName}
      isSearchDisabled={isSearchButtonDisabled}
      setIsSearchDisabled={setIsSearchButtonDisabled}
      searchAction={searchForIngredients}
    />
    {ingredientResponse.length > 0 ? <IngredientResponseView ingredientList={ingredientResponse} /> : <></>}
    </>
  )
}