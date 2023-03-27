import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IngredientView } from './IngredientView';

export function APICallAccordionView() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Get Cocktail Ingredients by Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <IngredientView />
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Get Cocktails by Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This endpoint has not been implemented yet!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}