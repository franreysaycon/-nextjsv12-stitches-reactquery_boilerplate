import React from "react"
import { useForm } from "react-hook-form"
import { joiResolver } from "@hookform/resolvers/joi"
import * as Label from "@radix-ui/react-label"
import Joi from "joi"
import Box from "../common/Box"
import Input from "../common/Input"
import useToast from "../../hooks/useToast"
import VerticalGrid from "../common/VerticalGrid"
import stitches from "../../stitches"

interface FormData {
  fullName: string
}

const formSchema = Joi.object({
  fullName: Joi.string().required(),
})

const FormLabel = stitches.styled(Label.Root, {
  marginRight: "$1",
})

const FeatureForm = () => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: joiResolver(formSchema),
  })
  const { showToast } = useToast()

  const sendToToast = (formData: FormData) => {
    showToast({
      header: "Hello World!",
      description: `Hey there, ${formData.fullName}!`,
    })
  }

  return (
    <Box as="form" onSubmit={handleSubmit(sendToToast)}>
      <VerticalGrid>
        <Box>
          <FormLabel htmlFor="fullName">Who are you?</FormLabel>
          <Input
            type="text"
            placeholder="Enter your fullname"
            {...register("fullName")}
          />
        </Box>
        <Input type="submit" value="Submit" />
      </VerticalGrid>
    </Box>
  )
}

export default FeatureForm
