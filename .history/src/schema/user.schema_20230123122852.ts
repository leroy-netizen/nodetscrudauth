import { object } from 'zod'


const createUserSchema = object({
    body: object({
        name: string({
            required_error: "None"
        })
    })
})