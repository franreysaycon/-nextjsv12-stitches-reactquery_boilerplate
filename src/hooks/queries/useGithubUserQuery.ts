import { useQuery } from "react-query"
import { getUser } from "../../services/githubUserService"

function useGithubUserQuery(username: string) {
  const query = useQuery([username], () => getUser(username))
  return query
}

export default useGithubUserQuery
