import stitches from "../../stitches"

const Button = stitches.styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  height: 35,
  backgroundColor: "$almond",
  fontWeight: "$bold",
  color: "#202020",
  border: "none",
  "&:hover": { opacity: 0.9 },
})

export default Button
