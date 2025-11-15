import { Element } from "../Element";

export class TextElement extends Element {
    constructor(id: string, data: Record<string, any>){
        super(id, "TEXT", data);
    }

    draw(): void {
         console.log(`📝 Drawing Text: "${this.data.text}" at (${this.data.x}, ${this.data.y})`);
     }
}