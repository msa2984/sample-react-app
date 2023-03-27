import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { fetchCocktailIngredients } from '../backend/cocktailApi'
import { Ingredient } from '../types/Ingredient';

export function IngredientView() {
  const [ingredientName, setIngredientName] = useState("");
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(true);

  var disableButtonIfFieldIsBlank = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target && e.target.value) {
      setIsSearchButtonDisabled(false);
    }
    else {
      setIsSearchButtonDisabled(true);
    }

    setIngredientName(e.target.value);
  }

  var searchForIngredients = async (e: React.MouseEvent<HTMLElement>) => {
    if (ingredientName) {
      const ingredients : Ingredient[] = await fetchCocktailIngredients(ingredientName);
      if (ingredients && ingredients.length > 0) {
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
    <Container>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span style={{ margin: '2px' }}>
          Provide the name of an ingredient, then select the "Search" button.
        </span>
        <TextField
          required
          margin="normal"
          id="ingredient-name-text-field-id"
          label="Ingredient Name"
          variant="outlined"
          helperText="Sample values include 'Peach', 'Vodka', and so on."
          value={ingredientName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            disableButtonIfFieldIsBlank(event);
          }} />
        <Button
          style={{ margin: '2px'  }}
          variant="contained"
          disabled={isSearchButtonDisabled}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            searchForIngredients(event);
          }}>
          Search
        </Button>
      </div>
    </Container>
  )
}