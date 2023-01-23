import { Request, Response } from 'express'
import logToConsole from '../utils/logger'

export function createUserHandler(req:Request, res:Response){
    try {
        const user = await // call create user service
    } catch (error) {
        logToConsole.error(error)
        return res.status(409).send(err)
    }
}