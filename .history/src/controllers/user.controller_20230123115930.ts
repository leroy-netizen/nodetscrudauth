import { Request, Response } from 'express'
import logToConsole from '../utils/logger'

export function createUserHandler(req:Request, res:Response){
    try {
        const user = aait // call create user service
    } catch (err) {
        logToConsole.error(err)
        return res.status(409).send(err.mesage)
    }
}