import { Request, Response } from 'express'
import { createUser } from '../service/user.service'
import logToConsole from '../utils/logger'
import { createUserSchema, createUserInput } from '../../.history/src/schema/user.schema_20230123124855';

export const createUserHandler = async(req:Request<{}, {}, createUserInput["body"]>, res:Response) => {
    try {
        const user = await createUser(req.body) 
        return user
    } catch (err) {
        logToConsole.error(err)
        return res.status(409).send(err.mesage)
    }
}