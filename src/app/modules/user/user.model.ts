import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import config from "../../config";
import bcrypt from 'bcrypt'
 
const userScheme = new Schema<TUser>({
    id: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    needsPasswordChange: {
        type:Boolean,
        default:true
    },
    isDeleted: {
        type:Boolean,
        default:false
    },
    role: {
        type:String,
        enum:['admin','faculty','student']
    },
    status: {
        type:String,
        enum:['in-progress','blocked']
    }
},{
    timestamps:true
})


userScheme.pre('save', async function (next){
    const user = this

    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds)
    )
    next()
})

userScheme.post('save', async function (doc, next){
    doc.password=''
    next()
})

export const User = model<TUser>('User',userScheme)