import { object, string } from 'zod'


export const createUserSchema = object({
    body: object({
        name: string({
            required_error: "Name is a required field"
        }),
        password: string({
            required_error: "password is required"
        }).min(8, "Minimum allowed characters is eight - pasword is to short"),
        passwordConfirmed: string({
            required_error: "Password confirmation is required"
        }), 
        email: string({
            required_error: "Email is required"
        }).email("Not a valid email")
    }).refine((data) => data.password === data.passwordConfirmed, {
        message: "Passwords do not match",
        path: ["passwordConfirmed"]
    })
})

export type createUserInput = 