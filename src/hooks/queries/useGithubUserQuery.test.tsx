import React from "react"
import { renderHook, waitFor } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import useGithubUserQuery from "./useGithubUserQuery"

const queryClient = new QueryClient()

describe("useGithubUserQuery", () => {
  it("should return the query hook without any problems", async () => {
    const { result } = renderHook(() => useGithubUserQuery("franreysaycon"), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })
    expect(result.current.isLoading).toBeTruthy()
    await waitFor(() => expect(result.current.isSuccess).toBeTruthy())
    expect(result.current.data).toEqual({
      avatarUrl: "/test.png",
      bio: "fake bio",
      name: "fake name",
    })
  })
})
