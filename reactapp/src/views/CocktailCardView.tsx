import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { ICocktailCardProps } from "../interfaces/ICocktailCardProps";

export function CocktailCardView(props: ICocktailCardProps) {
  const [cocktail, setCocktail] = useState(props.cocktail);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {cocktail && isVisible ? (
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="ingredient">
                C
              </Avatar>
            }
            action={<IconButton aria-label="settings"></IconButton>}
            title={cocktail?.name}
            subheader={cocktail?.category}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {cocktail?.instructions}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <div></div>
      )}
    </div>
  );
}
