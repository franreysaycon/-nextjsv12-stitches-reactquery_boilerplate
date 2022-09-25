import { render, waitFor, screen } from "@testing-library/react"
import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import Homepage from "../pages/index"

const queryClient = new QueryClient()

describe("Homepage", () => {
  it("should render without problems", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Homepage />
      </QueryClientProvider>
    )
    await waitFor(() =>
      expect(screen.getByText("fake bio")).toBeInTheDocument()
    )
    expect(screen.getByAltText("franreysaycon avatar")).toBeInTheDocument()
    expect(screen.getByText("fake bio")).toBeInTheDocument()
    expect(screen.getByText("fake name")).toBeInTheDocument()
  })
})
