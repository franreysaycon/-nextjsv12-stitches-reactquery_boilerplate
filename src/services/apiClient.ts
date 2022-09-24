import axios from "axios"
import applyCaseMiddleware from "axios-case-converter"

const apiClient = applyCaseMiddleware(
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  })
)

export default apiClient
