import { Request, Response } from 'express'
import logToConsole from '../utils/logger'

export function createUserHandler(req:Request, res:Response){
    try {
        // const user = await // call create user service
    } catch (err) {
        logToConsole.error(err:any)
        return res.status(409).send(err.mesage)
    }
}