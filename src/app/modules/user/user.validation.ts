import {z} from "zod"

const userValidationScheme =z.object({
     password:z.string({invalid_type_error:"password must be string"}).max(20,{message:"password can not be more the 20 character"}).optional(),
  })

export const UserValidation ={
    userValidationScheme
}