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
import FeatureAccordion from "../components/homepage/FeatureAccordion"

const Container = stitches.styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  minHeight: "inherit",
  width: "100%",
  "@md": {
    flexDirection: "row",
  },
  animation: `${fadeIn} ease-in 0.5s`,
})

const AvatarContainer = stitches.styled(VerticalGrid, {
  paddingTop: "$space$4",
  "@md": {
    position: "sticky",
    top: 0,
    left: 0,
  },
})

const AccordionContainer = stitches.styled(Box, {
  maxWidth: "60rem",
  width: "100%",
  paddingTop: "$space$4",
  height: "fit-content",
})

const Homepage = () => {
  const githubUserQuery = useGithubUserQuery("fransaycon")
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
            <AvatarContainer>
              <AvatarCircle
                src={githubUserQuery.data.avatarUrl}
                alt="franreysaycon avatar"
              />
              <h1>{githubUserQuery.data.name}</h1>
              <Box as="p" css={{ maxWidth: "20rem" }}>
                {githubUserQuery.data.bio}
              </Box>
            </AvatarContainer>
            <AccordionContainer>
              <FeatureAccordion />
            </AccordionContainer>
          </Container>
        )}
      </MaxContainer>
    </MainContainer>
  )
}

export default Homepage
