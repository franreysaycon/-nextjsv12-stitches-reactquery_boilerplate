import React from "react"
import { renderHook } from "@testing-library/react"
import useToast from "./useToast"
import ToastProvider from "../components/providers/ToastProvider"

describe("useToast", () => {
  it("should return the useToast hook without any problems", async () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ({ children }) => <ToastProvider>{children}</ToastProvider>,
    })

    expect(result.current.open).toBeFalsy()
    expect(result.current.showToast).toBeDefined()
  })
})
