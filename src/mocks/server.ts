import { setupServer } from "msw/node"
import githubUserServiceMock from "./githubUserService.mock"

const server = setupServer(...githubUserServiceMock)

export default server
