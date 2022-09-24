import { rest } from "msw"
import { GetUserResult } from "../services/githubUserService"

const mocks = [
  rest.get<undefined, GetUserResult>(
    `https://api.github.com/users/franreysaycon`,
    async (_req, res, ctx) => {
      return res(
        ctx.json({
          avatarUrl: "/test.png",
          bio: "fake bio",
          name: "fake name",
        })
      )
    }
  ),
]

export default mocks
