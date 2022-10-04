import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import FeatureAccordion from "./FeatureAccordion"

describe("FeatureAccordion", () => {
  it("should show `Introduction` by default and able to close it.", () => {
    render(<FeatureAccordion />)
    expect(
      screen.getByText("Hello World! Enjoy a NextJS v12 boilerplate.")
    ).toBeInTheDocument()
    fireEvent.click(screen.getByText("Introduction"))
    expect(
      screen.queryByText("Hello World! Enjoy a NextJS v12 boilerplate.")
    ).not.toBeInTheDocument()
  })

  it("should show `Development Environment` and able to close it.", () => {
    render(<FeatureAccordion />)
    fireEvent.click(screen.getByText("Development Environment"))
    expect(
      screen.getByText(
        "I used yarn as a package manager, and Node should be version 16 and above."
      )
    ).toBeInTheDocument()
    fireEvent.click(screen.getByText("Development Environment"))
    expect(
      screen.queryByText(
        "I used yarn as a package manager, and Node should be version 16 and above."
      )
    ).not.toBeInTheDocument()
  })

  it("should show `Folder Philosophy` and able to close it.", () => {
    render(<FeatureAccordion />)
    fireEvent.click(screen.getByText("Folder Philosophy"))
    expect(
      screen.getByText(
        "We use the Pascal case for our components and camel case for other miscellaneous files. We, of course, also follow the use- prefix for hooks."
      )
    ).toBeInTheDocument()
    fireEvent.click(screen.getByText("Folder Philosophy"))
    expect(
      screen.queryByText(
        "We use the Pascal case for our components and camel case for other miscellaneous files. We, of course, also follow the use- prefix for hooks."
      )
    ).not.toBeInTheDocument()
  })

  it("should show `Styling` and able to close it.", () => {
    render(<FeatureAccordion />)
    fireEvent.click(screen.getByText("Styling"))
    expect(
      screen.getByText(
        "We use stitches to style @radixui primitives. To take advantage of stitches CSS APIs, use the Box component, then override it with the HTML element you want."
      )
    ).toBeInTheDocument()
    fireEvent.click(screen.getByText("Styling"))
    expect(
      screen.queryByText(
        "We use stitches to style @radixui primitives. To take advantage of stitches CSS APIs, use the Box component, then override it with the HTML element you want."
      )
    ).not.toBeInTheDocument()
  })

  it("should show `API Integration` and able to close it.", () => {
    render(<FeatureAccordion />)
    fireEvent.click(screen.getByText("API Integration"))
    expect(
      screen.getByText(
        "It would be best if you took advantage of the factory pattern to enable different clients and have their own custom rules."
      )
    ).toBeInTheDocument()
    fireEvent.click(screen.getByText("API Integration"))
    expect(
      screen.queryByText(
        "It would be best if you took advantage of the factory pattern to enable different clients and have their own custom rules."
      )
    ).not.toBeInTheDocument()
  })

  it("should show `Forms` and able to close it.", () => {
    render(<FeatureAccordion />)
    fireEvent.click(screen.getByText("Forms"))
    expect(
      screen.getByText(
        "We use label @radixui primitives for form accessibility. Everything else is created in-house, styled with stitches."
      )
    ).toBeInTheDocument()
    fireEvent.click(screen.getByText("Forms"))
    expect(
      screen.queryByText(
        "We use label @radixui primitives for form accessibility. Everything else is created in-house, styled with stitches."
      )
    ).not.toBeInTheDocument()
  })

  it("should show `Testing` and able to close it.", () => {
    render(<FeatureAccordion />)
    fireEvent.click(screen.getByText("Testing"))
    expect(
      screen.getByText(
        "The Jest setup involves automatic clearing of mocks and installation of mock service workers. Each mock should cover one service combined in the mocks/server.ts file."
      )
    ).toBeInTheDocument()
    fireEvent.click(screen.getByText("Testing"))
    expect(
      screen.queryByText(
        "The Jest setup involves automatic clearing of mocks and installation of mock service workers. Each mock should cover one service combined in the mocks/server.ts file."
      )
    ).not.toBeInTheDocument()
  })

  it("should show `Deployment` and able to close it.", () => {
    render(<FeatureAccordion />)
    fireEvent.click(screen.getByText("Deployment"))
    expect(
      screen.getByText("I suggest deploying to Vercel for things to be easy.")
    ).toBeInTheDocument()
    fireEvent.click(screen.getByText("Deployment"))
    expect(
      screen.queryByText("I suggest deploying to Vercel for things to be easy.")
    ).not.toBeInTheDocument()
  })

  it("should show `Analytics` and able to close it.", () => {
    render(<FeatureAccordion />)
    fireEvent.click(screen.getByText("Analytics"))
    expect(
      screen.getByText(
        "If you don't want to use Google Analytics, delete the only lib function in this boilerplate and remove the useEffect hook that uses it at _app.tsx."
      )
    ).toBeInTheDocument()
    fireEvent.click(screen.getByText("Analytics"))
    expect(
      screen.queryByText(
        "If you don't want to use Google Analytics, delete the only lib function in this boilerplate and remove the useEffect hook that uses it at _app.tsx."
      )
    ).not.toBeInTheDocument()
  })
})
