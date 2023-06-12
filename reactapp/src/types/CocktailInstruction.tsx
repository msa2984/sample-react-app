import React from "react";

export class CocktailInstruction extends React.Component {
  ingredient: string = "";
  measure: string = "";

  constructor(props: { measure: string; ingredient: string }) {
    super(props);

    this.measure = props.measure;
    this.ingredient = props.ingredient;
  }
}
