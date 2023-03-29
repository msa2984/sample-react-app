import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { fetchCocktails } from '../backend/cocktailApi'
import { Cocktail } from '../types/Cocktail';

export function CocktailView() {
  const [CocktailName, setCocktailName] = useState("");
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(true);

  var disableButtonIfFieldIsBlank = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target && e.target.value) {
      setIsSearchButtonDisabled(false);
    }
    else {
      setIsSearchButtonDisabled(true);
    }

    setCocktailName(e.target.value);
  }

  var searchForCocktails = async (e: React.MouseEvent<HTMLElement>) => {
    if (CocktailName) {
      const Cocktails : Cocktail[] = await fetchCocktails(CocktailName);
      if (Cocktails && Cocktails.length > 0) {
        console.log("Retrieved Cocktails!");
      }
      else {
        console.error("There was a problem retrieving Cocktails.");
      }
    }
    else {
      const error: string = "Cocktail Name was not set! Cannot search for blank Cocktails.";
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
          Provide the name of an Cocktail, then select the "Search" button.
        </span>
        <TextField
          required
          margin="normal"
          id="Cocktail-name-text-field-id"
          label="Cocktail Name"
          variant="outlined"
          helperText="Sample values include 'Peach', 'Vodka', and so on."
          value={CocktailName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            disableButtonIfFieldIsBlank(event);
          }} />
        <Button
          style={{ margin: '2px'  }}
          variant="contained"
          disabled={isSearchButtonDisabled}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            searchForCocktails(event);
          }}>
          Search
        </Button>
      </div>
    </Container>
  )
}
