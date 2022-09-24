import apiClient from "./apiClient"

export interface GetUserResult {
  avatarUrl: string
  bio: string
  name: string
}

export async function getUser(username: string): Promise<GetUserResult> {
  const response = await apiClient.get(
    `https://api.github.com/users/${username}`
  )
  return response.data
}
