import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Collapse,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButtonProps } from "@mui/material/IconButton";
import { useState } from "react";
import { ICocktailCardProps } from "../interfaces/ICocktailCardProps";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function CocktailCardView(props: ICocktailCardProps) {
  const [cocktail, setCocktail] = useState(props.cocktail);
  const [isVisible, setIsVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{ display: "flex", float: "left", width: "22%", padding: "4px" }}
    >
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
          <CardMedia
            component="img"
            image={cocktail?.thumbnailLink}
            alt={cocktail?.name}
          />
          <CardActions>
            <p>Expand for Details</p>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="Show Details"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <h3>Ingredients</h3>
                <ul>
                  {cocktail?.cocktailInstructions.map((instruction) => (
                    <li>
                      {instruction.ingredient} - {instruction.measure}
                    </li>
                  ))}
                </ul>
                <Typography variant="body2" color="text.secondary">
                  <h3>Instructions</h3>
                  {cocktail?.instructions}
                </Typography>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ) : (
        <div></div>
      )}
    </div>
  );
}
