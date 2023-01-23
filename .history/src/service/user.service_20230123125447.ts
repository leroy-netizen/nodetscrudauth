import { DocumentDefinition } from 'mongoose'
import UserModel, { UserDocument } from '../models/user.model';


export const createUser = async(input: DocumentDefinition<Omit<UserDocument, 'createdA'>>) => {
    try {
        return await UserModel.create(input)
    } catch (err: any) {
        throw new Error(err)
    }
}