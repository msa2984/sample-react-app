import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import { fetchCocktailIngredients } from '../backend/cocktailApi'
import { Ingredient } from '../types/Ingredient';
import { ISearchByNameProps } from '../interfaces/ISearchByNameProps';

export function SearchByNameView(props: ISearchByNameProps) {

  var disableButtonIfFieldIsBlank = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target && e.target.value) {
      props.setIsSearchDisabled(false);
    }
    else {
      props.setIsSearchDisabled(true);
    }

    props.setEntryName(e.target.value);
  }

  return (
    <Container>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span style={{ margin: '2px' }}>
          {props.description}
        </span>
        <TextField
          required
          margin="normal"
          id={props.id}
          label={props.label}
          variant="outlined"
          helperText={props.helperText}
          value={props.entryName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            disableButtonIfFieldIsBlank(event);
          }} />
        <Button
          style={{ margin: '2px'  }}
          variant="contained"
          disabled={props.isSearchDisabled}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            props.searchAction(event);
          }}>
          Search
        </Button>
      </div>
    </Container>
  )
}