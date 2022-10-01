import stitches from "../../stitches"

const Input = stitches.styled("input", {
  all: "unset",
  width: 200,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 10px",
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  boxShadow: `0 0 0 1px #202020`,
  "&:focus": { boxShadow: `0 0 0 2px #202020` },
})

export default Input
