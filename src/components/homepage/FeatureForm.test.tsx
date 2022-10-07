import React from "react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import FeatureForm from "./FeatureForm"
import ToastProvider from "../providers/ToastProvider"

describe("FeatureForm", () => {
  it("should render without any problems", async () => {
    render(
      <ToastProvider>
        <FeatureForm />
      </ToastProvider>
    )
    expect(screen.getByText("Who are you?")).toBeInTheDocument()
    fireEvent.change(screen.getByPlaceholderText("Enter your fullname"), {
      target: { value: "Fake Name" },
    })
    fireEvent.click(screen.getByText("Submit"))

    await waitFor(() => screen.getByText("Hello World!"))
    expect(screen.getByText("Hey there, Fake Name!")).toBeInTheDocument()
  })

  it("show an error if full name > 15", async () => {
    render(
      <ToastProvider>
        <FeatureForm />
      </ToastProvider>
    )
    expect(screen.getByText("Who are you?")).toBeInTheDocument()
    fireEvent.change(screen.getByPlaceholderText("Enter your fullname"), {
      target: { value: "aaaaaaaaaaaaaaaa" },
    })
    fireEvent.click(screen.getByText("Submit"))

    await waitFor(() => screen.getByText("Error!"))
    expect(
      screen.getByText(
        '"fullName" length must be less than or equal to 15 characters long'
      )
    ).toBeInTheDocument()
  })
})
