import React from "react"
import { render } from "@testing-library/react"
import MetaHead from "./MetaHead"

describe("MetaHead", () => {
  it("should render without any problems", () => {
    render(
      <MetaHead
        title="fake title"
        description="fake description"
        link="fake link"
      />
    )
  })
})
