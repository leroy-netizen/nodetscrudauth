import { DocumentDefinition } from 'mongoose'
import U{ UserDocument } from '../models/user.model';


export async function(input: DocumentDefinition<UserDocument>) {
    try {
        return await UserModel.create(input)
    } catch (err: any) {
        throw new Error(err)
    }
}