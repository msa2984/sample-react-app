import { IIngredientCardProps } from "../interfaces/IIngredientCardProps";
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

export function IngredientCardView(props: IIngredientCardProps) {
  const [ingredient, setIngredient] = useState(props.ingredient);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {ingredient && isVisible ? (
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="ingredient">
                I
              </Avatar>
            }
            action={<IconButton aria-label="settings"></IconButton>}
            title={ingredient?.name}
            subheader={ingredient?.type}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {ingredient?.description}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <div></div>
      )}
    </div>
  );
}
