import stitches from "../stitches"

export const float = stitches.keyframes({
  "0%": {
    transform: "translatey(0px)",
  },
  "50%": {
    transform: "translatey(-15px)",
  },
  "100%": {
    transform: "translatey(0px)",
  },
})

export const fadeIn = stitches.keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
})

export const fadeInUp = stitches.keyframes({
  "0%": {
    opacity: 0,
    transform: "translatey(15px)",
  },
  "100%": {
    opacity: 1,
    transform: "translatey(0px)",
  },
})
