import { Request, Response } from 'express'
import { createUser } from '../service/user.service'
import logToConsole from '../utils/logger'

export const createUserHandler = (req:Request, res:Response) => {
    try {
        // const user = await // call create user service
    } catch (err) {
        logToConsole.error(err)
        return res.status(409).send(err.mesage)
    }
}