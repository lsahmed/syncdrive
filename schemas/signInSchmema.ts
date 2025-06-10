import * as z from "zod"

export const signInSchema = z.object({
    identifier: z
        .string()
        .min(1, {message: "Email is required"})
        .email({message: "Please enter a valid email address"}),
    password: z
        .string()
        .min(1, {message: "Password is required"})
        .min(8, {message: "Password can't be less than 8 characters "}),
})