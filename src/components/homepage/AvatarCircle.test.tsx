import React from "react"
import { render, screen } from "@testing-library/react"
import AvatarCircle from "./AvatarCircle"
import testImage from "../../images/test.png"

describe("AvatarCircle", () => {
  it("should render without any problems", () => {
    render(<AvatarCircle src={testImage} alt="fake image" />)
    expect(screen.getByAltText("fake image")).toBeInTheDocument()
  })
})
