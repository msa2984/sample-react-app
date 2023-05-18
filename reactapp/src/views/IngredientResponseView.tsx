import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { fetchCocktailIngredients } from '../backend/cocktailApi'
import { Ingredient } from '../types/Ingredient';
import { SearchByNameView } from './SearchByNameView';
import { IIngredientResponseProps } from '../interfaces/IIngredientResponseProps';

export function IngredientResponseView(props: IIngredientResponseProps) {
  const ingredientList = props.ingredientList;
  const listItems = ingredientList.map((ingredient) => <li key={ingredient.id}>{ingredient.name}</li>);

  return (
    <div>{
      ingredientList? (
      ingredientList.length > 0 ?
        <ul>{listItems}</ul> :
        <span>Sorry, there are no ingredients matching the provided input. Please try again.</span>)
        : (<></>)}
    </div>
  )
}
