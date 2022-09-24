import React from "react"
import stitches from "../../stitches";
import NextImage from "next/image"

interface AvatarCircleProps {
  src: string
}

const Container = stitches.styled("div", {
  width: "200px",
  height: "200px",
  borderRadius: "$radii$full",
  overflow: "hidden",
})

function AvatarCircle({ src }: AvatarCircleProps) {
  return (
    <Container>
      <NextImage src={src} width={200} height={200} />
    </Container>
  )
}

export default AvatarCircle
