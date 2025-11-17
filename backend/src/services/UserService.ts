
import { error } from "console";
import jwt from 'jsonwebtoken'
import { UserRepository } from "../repositories/UserRepository";
import bcrypt from 'bcryptjs';


export class UserService {
       
       private userRepo: UserRepository;


       constructor(){
         
           this.userRepo = new UserRepository();
       }

         private generateToken(id: string) {
    return jwt.sign({ id }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });
  }



     async registerUser(data: { name: string; email: string; password: string }) {
    const existing = await this.userRepo.findByEmail(data.email);
    if (existing) throw new Error("Email already exists");

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.userRepo.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
    });

    const token = this.generateToken(user.id);

    return { user, token };
  }


       async loginUser(email: string, password: string) {
    const user = await this.userRepo.findByEmail(email);
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid password");

    const token = this.generateToken(user.id);

    return { user, token };
  }


       async getUserById(id: string){
            
            return this.userRepo.findById(id);
       }
}