import { UserRepository } from "../repositories/UserRepository";
import { BoardRepository } from "../repositories/BoardRepository";

export class BoardService{
      
      private boardRepo : BoardRepository;
      private userRepo  : UserRepository;


      constructor(){
           
           this.boardRepo = new BoardRepository();
           this.userRepo  = new UserRepository();

      }

      async createBoard( data: {title: string; ownerId: string}){
           
          const owner = await this.userRepo.findById(data.ownerId);

          if(!owner) throw new Error ("User not found");

           return this.boardRepo.createBoard({
            title: data.title,
            ownerId: data.ownerId
           })
      }

       async getBoardById(id: string) {
    return this.boardRepo.getBoardById(id);
  }

  // Get all boards of a user
  async getBoardsForUser(userId: string) {
    return this.boardRepo.getBoardByUser(userId);
  }

  // Rename board
  async renameBoard(boardId: string, title: string) {
    return this.boardRepo.updateBoard(boardId,  title);
  }

  // Delete board
  async deleteBoard(id: string) {
    return this.boardRepo.deleteBoard(id);
  }
}