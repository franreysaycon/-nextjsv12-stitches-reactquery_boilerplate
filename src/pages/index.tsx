import React from "react"
import MainContainer from "../components/common/MainContainer"
import MaxContainer from "../components/common/MaxContainer"
import MetaHead from "../components/common/MetaHead"
import useGithubUserQuery from "../hooks/queries/useGithubUserQuery"
import AvatarCircle from "../components/homepage/AvatarCircle"
import stitches from "../stitches"
import VerticalGrid from "../components/common/VerticalGrid"
import Box from "../components/common/Box"
import { fadeIn } from "../stitches/keyframes"

const Container = stitches.styled("div", {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  justifyContent: "center",
  margin: "auto",
  minHeight: "inherit",
  width: "100%",
  "@md": {
    flexDirection: "row",
  },
  animation: `${fadeIn} ease-in 0.5s`,
})

const Homepage = () => {
  const githubUserQuery = useGithubUserQuery("franreysaycon")
  return (
    <MainContainer>
      <MetaHead
        title="A fsaycon.dev Boilerplate"
        description="NextJS + Stitches + React Query + "
        link="/"
      />
      <MaxContainer>
        {githubUserQuery.isSuccess && (
          <Container>
            <VerticalGrid>
              <AvatarCircle
                src={githubUserQuery.data.avatarUrl}
                alt="franreysaycon avatar"
              />
              <h1>{githubUserQuery.data.name}</h1>
              <Box as="p" css={{ maxWidth: "15rem" }}>
                {githubUserQuery.data.bio}
              </Box>
            </VerticalGrid>
          </Container>
        )}
      </MaxContainer>
    </MainContainer>
  )
}

export default Homepage
