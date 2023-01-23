import { Request, Response } from 'express'
import { createUser } from '../service/user.service'
import logToConsole from '../utils/logger'
import { createUserInput } from '../schema/user.schema'

export const createUserHandler = async(req:Request<{}, {}, createUserInput["body"]>, res:Response) => {
    try {
        const user = await createUser(req.body) 
        res.send (user)
    } catch (err: any) {
        logToConsole.error(err)
        return res.status(409).send(err.mesage) 
    }
}