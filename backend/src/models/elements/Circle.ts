import { Element } from "../Element";

export class Circle extends Element {
     
      constructor(id: string, data: Record<string, any>){
         super(id, "CIRCLE", data);
      }

      draw(): void{
        console.log(`Drawing Circle at (${this.data.x}, ${this.data.y}) with radius ${this.data.radius}`);
      }
}