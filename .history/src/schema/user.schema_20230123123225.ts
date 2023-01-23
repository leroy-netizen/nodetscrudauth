import { object, string } from 'zod'


const createUserSchema = object({
    body: object({
        name: string({
            required_error: "Name is a required field"
        }),
        password: string({
            required_error: "password is required"
        }).min(8, "Minimum allowed characters is eight - pasword is to short"),
        passwordConfirmed: string({
            
        })
    })
})