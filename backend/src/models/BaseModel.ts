
export abstract class BaseModel {
    id: string;
    createdAt: Date;
    updatedAt: Date;


      constructor(id: string, createdAt?: Date, updatedAt?: Date){
           this.id =id;
           this.createdAt = createdAt ?? new Date();
           this.updatedAt = updatedAt ?? new Date();
      }
      
      updateTimestamp(){
          this.updatedAt = new Date();
      }

}