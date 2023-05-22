import React, { useState } from "react";
import { fetchCocktails } from "../backend/cocktailApi";
import { Cocktail } from "../types/Cocktail";
import { SearchByNameView } from "./SearchByNameView";
import { ICocktail } from "../interfaces/ICocktail";
import { ResponseView } from "./ResponseView";
import { ItemType } from "../types/ItemTypeEnum";

export function CocktailView() {
  const [cocktailName, setCocktailName] = useState("");
  const [cocktailResponse, setCocktailResponse] = useState<ICocktail[] | null>(
    null
  );
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(true);

  var searchForCocktails = async (e: React.MouseEvent<HTMLElement>) => {
    if (cocktailName) {
      const cocktails: Cocktail[] = await fetchCocktails(cocktailName);
      console.log(cocktails);
      console.log(cocktails.length);
      if (cocktails) {
        setCocktailResponse(cocktails);
        console.log("Retrieved Cocktails!");
      } else {
        console.error("There was a problem retrieving cocktails.");
      }
    } else {
      const error: string =
        "Cocktail Name was not set! Cannot search for blank cocktails.";
      console.error(error);
    }
  };

  return (
    <>
      <SearchByNameView
        id="get-cocktail-by-name-id"
        label="Cocktail Name"
        description="Provide the name of an Cocktail, then select the 'Search' button."
        helperText="Sample values include 'Margarita', 'Martini', and so on."
        entryName={cocktailName}
        setEntryName={setCocktailName}
        isSearchDisabled={isSearchButtonDisabled}
        setIsSearchDisabled={setIsSearchButtonDisabled}
        searchAction={searchForCocktails}
      />
      <ResponseView
        ingredientList={null}
        itemType={ItemType.Cocktail}
        cocktailList={cocktailResponse}
      />
    </>
  );
}
