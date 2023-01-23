import { DocumentDefinition } from 'mongoose'
import UserModel, { UserDocument } from '../models/user.model';


export const createUser = async(input: DocumentDefinition<Omit<UserDocument, 'createdAt  updatedAt'>>) => {
    try {
        return await UserModel.create(input)
    } catch (err: any) {
        throw new Error(err)
    }
}