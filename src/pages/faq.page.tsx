import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqsData } from "../components/faqs/faqsData";
import Head from "next/head";

type AccordionItemProps = {
  question: string;
  answer: string;
};

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1">{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default function FAQ() {
  
  return (
    <>
      <Head>
        <title>Marvel Comics</title>
        <meta name="description" content="Marvel Comics - CTD" />
        <link rel="icon" href="/marvel-comics.png" />
      </Head>
    <Box marginTop={"2rem"} maxWidth={"80%"} marginBottom={"2rem"}>
      {faqsData.map((question) => {
        return (
          <AccordionItem
            key={question.id}
            question={question.question}
            answer={question.answer}
          />
        );
      })}
    </Box>
    </>
  );
}
