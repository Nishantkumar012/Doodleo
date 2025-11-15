import { BaseModel } from "./BaseModel";
import { User } from "./User";


export class Board extends BaseModel{
      
     
    private title: string;
    private owner: User;
    private elements = [] as any;

    constructor(id: string, title: string, owner: User){
          
         super(id);
         this.title = title;
         this.owner = owner;
         this.elements = [];
    }


    addElement(element: any){
        this.elements.push(element);
        this.updateTimestamp();
    }


      getBoardInfo() {
         return {
            id: this.id,
            title: this.title,
            owner: this.owner.getPublicProfile(),
            totalElements: this.elements.length,
            createdAt:     this.createdAt,
         };
      }


        getOwner(){
             return this.owner;
        }

        rename(newTitle: string){
            this.title = newTitle;
            this.updateTimestamp();
        }
}