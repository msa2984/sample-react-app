import React from "react";
import { IIngredient } from "../interfaces/IIngredient";
import { IApiTypeProps } from "../interfaces/IApiTypeProps";
import { checkForNullJson } from "../backend/jsonHelpers";

export class Ingredient extends React.Component<IApiTypeProps> implements IIngredient{
  name: string = "";
  id: number = NaN;
  description: string = "";
  type: string = "";
  isAlcoholic: boolean = false;
  abv: number = NaN;

  constructor(props: IApiTypeProps) {
    super(props);

    if (!checkForNullJson(props.json)) {
      return;
    }

    var jsonObject = JSON.parse(props.json)
    try {
      this.id = +jsonObject["idIngredient"];
      this.name = jsonObject["strIngredient"];
      this.description = jsonObject["strDescription"];
      this.type = jsonObject["strType"];
      this.abv = +jsonObject["strABV"];

      if (String(jsonObject["strAlcohol"]).toLowerCase() === "yes") {
        this.isAlcoholic = true;
      }
    }
    catch (e) {
      console.error(`Couldn't parse at least one JSON key! Could not parse ingredient due to error ${e}`)
      return;
    }

    return this;
  }
}