import React from "react"
import stitches from "../../stitches"
import NextImage, { StaticImageData } from "next/image"

interface AvatarCircleProps {
  src: string | StaticImageData
  alt: string
}

const Container = stitches.styled("div", {
  width: "200px",
  height: "200px",
  borderRadius: "$radii$full",
  overflow: "hidden",
})

function AvatarCircle({ src, alt }: AvatarCircleProps) {
  return (
    <Container>
      <NextImage src={src} width={200} height={200} alt={alt} />
    </Container>
  )
}

export default AvatarCircle
