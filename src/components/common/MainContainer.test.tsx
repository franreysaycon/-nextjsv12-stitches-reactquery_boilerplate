import React from "react"
import { render } from "@testing-library/react"
import MainContainer from "./MainContainer"

describe("MainContainer", () => {
  it("should render without any problems", () => {
    render(<MainContainer />)
  })
})
