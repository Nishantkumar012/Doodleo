// import prisma from "../../prisma/client"
import prisma from "../utils/prisma"

// import {User} from "../models/User"


export class UserRepository{
    async create(data: {name:string; email: string; password: string}){
        
         return prisma.user.create({data});
    }


    async findByEmail(email: string){
          
        return prisma.user.findUnique({ where: { email }});
    }

    async findById(id: string){
          
         return prisma.user.findUnique({ where: { id }})
    }


    async getAllUsers(){
         
        return prisma.user.findMany()
    }
}

