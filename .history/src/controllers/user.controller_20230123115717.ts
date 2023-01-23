import { Request, Response } from 'express'
import { Logger } from 'pino'

export function createUserHandler(req:Request, res:Response){
    try {
        const user = await // call create user service
    } catch (error) {
        
    }
}