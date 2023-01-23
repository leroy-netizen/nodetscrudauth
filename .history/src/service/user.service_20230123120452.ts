import { DocumentDefinition } from 'mongoose'
import UserModel, { UserDocument } from '../models/user.model';


export async create(input: DocumentDefinition<UserDocument>) {
    try {
        return await UserModel.create(input)
    } catch (err: any) {
        throw new Error(err)
    }
}