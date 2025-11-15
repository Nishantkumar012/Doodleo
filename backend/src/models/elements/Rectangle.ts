import { Element } from "../Element";


export class Rectangle extends Element {
       constructor(id: string, data: Record<string, any>){
         super(id, "Rectangle", data);

       }

       draw(): void {
          console.log(` Drawing Rectangle at (${this.data.x}, ${this.data.y})with width ${this.data.width} and height ${this.data.height}`);
       }
}