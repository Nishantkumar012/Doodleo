import { permission } from "process"
import prisma from "../utils/prisma"



export class BoardRepository{
    
    async createBoard(data:{ title: string, ownerId: string}){
              
          return prisma.board.create({ data })
    }

       async getBoardById(boardId: string){
          
           return prisma.board.findUnique({
               
               where: { id: boardId},
               include: { elements: true, permission: true}
           })
       }



       async getBoardByUser(userId: string){
           
          return prisma.board.findUnique({
             
              where: { id: userId},
              include: { permissions: true}
          })
       }
}
