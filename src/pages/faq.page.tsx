import * as React from "react";
import {Box, Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqsData } from "src/components/faqs/faqsData";

export default function SimpleAccordion() {
  return (
      <Box sx={{width:'80%', margin:'auto'}}>
          {faqsData.map((faq) => {
            return (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography><b>{faq.question}</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
      </Box>
  );
}
