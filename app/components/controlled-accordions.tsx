"use client";
import React, { useState } from "react";
import { AccordionSummary, Accordion, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface ControlledAccordionItem {
    summary: React.ReactNode,
    details: React.ReactNode
}

export interface ControlledAccordionsProps {
    items: ControlledAccordionItem[];
    itemClassName?: string;
    summaryClassName?: string;
    detailsClassName?: string;
    expandIcon?: React.ReactNode;
}

const ControlledAccordions: React.FC<ControlledAccordionsProps> = ({ items, itemClassName, summaryClassName, detailsClassName, expandIcon = <ExpandMoreIcon /> }) => {
    const [expanded, setExpanded] = useState<string>("");

    const handleChange = (panel: string) => (_event: React.SyntheticEvent<Element, Event>, expanded: boolean) => {
        setExpanded(expanded ? panel : "");
    };

    return (
        <>
            {items.map((item, idx) => (
                <div className={`${itemClassName}`} key={idx}>
                    <Accordion
                        sx={{ background: "transparent" }}
                        square
                        expanded={expanded === `panel${idx}`}
                        onChange={handleChange(`panel${idx}`)}
                    >
                        <AccordionSummary
                            className={summaryClassName}
                            expandIcon={expandIcon}
                            aria-controls={`panel${idx}content`}
                            id={`panel${idx}header`}
                        >
                            {item.summary}
                        </AccordionSummary>
                        <AccordionDetails className={detailsClassName}>{item.details}</AccordionDetails>
                    </Accordion>
                </div>
            ))}
        </>
    );
}

export default ControlledAccordions;
