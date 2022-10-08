import React, { useEffect } from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import ToastProvider from "./ToastProvider"
import useToast from "../../hooks/useToast"

const TestComponent = () => {
  const { showToast } = useToast()

  useEffect(() => {
    showToast({
      header: "fake header",
      description: "fake description",
    })
  }, [showToast])

  return <></>
}

describe("ToastProvider", () => {
  it("should render without any problems and able to close toast", async () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    )
    expect(screen.getByText("fake header")).toBeInTheDocument()
    expect(screen.getByText("fake description")).toBeInTheDocument()
    fireEvent.click(screen.getByText("OK"))
    expect(screen.queryByText("fake header")).not.toBeInTheDocument()
    expect(screen.queryByText("fake description")).not.toBeInTheDocument()
  })
})
