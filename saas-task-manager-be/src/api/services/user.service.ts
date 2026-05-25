import { Users } from "../../models/user.model.js"
import bcrypt from "bcrypt"


export const createUserService= async(username:string,email:string,password:string)=>{

    const existing = await Users.findOne({email});

    if(existing){
        return({code:403,message:"A user with email already exists!"})
    }

    const hashedPass = await bcrypt.hash(password,10)



    try{
        await Users.create({
            username,email,password:hashedPass
        })

        return({code:201,message:"User created successfully!"})

    }catch(error:any){
        throw({code:500,message:error.message})
    }

}