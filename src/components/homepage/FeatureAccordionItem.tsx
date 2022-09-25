import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import stitches from "../../stitches"
import React from "react"
import Box from "../common/Box"

interface FeatureAccordionItemProps {
  header: string
  value: string
  children: React.ReactNode
}

const slideDown = stitches.keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
})

const slideUp = stitches.keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
})

const AccordionHeader = stitches.styled(Accordion.Header, {
  display: "flex",
  "&:hover": {
    cursor: "pointer",
  },
  '&[data-state="closed"]': {
    "&:hover": {
      opacity: 0.7,
    },
  },
})

const AccordionChevron = stitches.styled(ChevronDownIcon, {
  transition: "transform 300ms",
  "[data-state=open] &": { transform: "rotate(180deg)" },
})

const AccordionItem = stitches.styled(Accordion.Item, {
  '&[data-state="open"]': {
    border: "1px solid $almond",
  },
})

const AccordionTrigger = stitches.styled(Accordion.Trigger, {
  all: "unset",
  backgroundColor: "$almond",
  padding: "$space$4",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "$rg",
  lineHeight: 1,
})

const AccordionContent = stitches.styled(Accordion.Content, {
  padding: "$space$4",
  overflow: "hidden",
  animationFillMode: "forwards",
  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})

const FeatureAccordionItem = ({
  header,
  children,
  value,
}: FeatureAccordionItemProps) => (
  <AccordionItem value={value}>
    <AccordionHeader>
      <AccordionTrigger>
        <Box as="h2">{header}</Box>
        <AccordionChevron />
      </AccordionTrigger>
    </AccordionHeader>
    <AccordionContent>{children}</AccordionContent>
  </AccordionItem>
)

export default FeatureAccordionItem
