import React, { useEffect } from "react"
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
  fullName: Joi.string().max(15).required(),
})

const FormLabel = stitches.styled(Label.Root, {
  height: "fit-content",
  marginRight: "$2",
  minWidth: "max-content",
})

const FeatureForm = () => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: joiResolver(formSchema),
  })
  const { showToast } = useToast()
  const nameError = formState.errors.fullName?.message

  const sendToToast = (formData: FormData) => {
    showToast({
      header: "Hello World!",
      description: `Hey there, ${formData.fullName}!`,
    })
  }

  useEffect(() => {
    if (nameError) {
      showToast({
        header: "Error!",
        description: nameError,
      })
    }
  }, [nameError, showToast])

  return (
    <Box as="form" onSubmit={handleSubmit(sendToToast)}>
      <VerticalGrid>
        <Box css={{ display: "flex", alignItems: "center" }}>
          <FormLabel htmlFor="fullName">Who are you?</FormLabel>
          <Input
            type="text"
            placeholder="Enter your fullname"
            css={{ width: "100%" }}
            error={!!nameError}
            {...register("fullName")}
          />
        </Box>
        <Input
          type="submit"
          value="Submit"
          css={{ backgroundColor: "$almond", "&:hover": { cursor: "pointer" } }}
        />
      </VerticalGrid>
    </Box>
  )
}

export default FeatureForm
