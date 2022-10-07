import React from "react"
import { render, screen } from "@testing-library/react"
import FeatureAccordionItem from "./FeatureAccordionItem"
import { Root as AccordionRoot } from "@radix-ui/react-accordion"

describe("FeatureAccordionItem", () => {
  it("should render without any problems", () => {
    render(
      <AccordionRoot type="single" defaultValue="fake-id">
        <FeatureAccordionItem header="fake header" value="fake-id">
          <h1>Hello World</h1>
        </FeatureAccordionItem>
      </AccordionRoot>
    )
    expect(screen.getByText("fake header")).toBeInTheDocument()
    expect(screen.getByText("Hello World")).toBeInTheDocument()
  })
})
