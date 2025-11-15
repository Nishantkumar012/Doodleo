import { BaseModel } from "./BaseModel";


export abstract class Element extends BaseModel{
    
    protected type: string;
    protected data: Record<string, any>;


    constructor(id: string, type: string, data: Record<string, any>){
         super(id);
         this.type = type;
         this.data = data;
    }

      abstract draw(): void;

      move(x: number, y: number) {
         
          this.data.x = x;
          this.data.y = y;
          this.updateTimestamp();
      }

      resize(width: number, height: number){
         this.data.width = width;
         this.data.height = height;
         this.updateTimestamp();
      }

      getInfo(){
         return {
             id: this.id,
             type: this.type,
             data: this.data,
             updatedAt: this.updatedAt,
         }
      }
}