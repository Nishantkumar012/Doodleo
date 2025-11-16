
import { error } from "console";
import { UserRepository } from "../repositories/UserRepository";
import bcrypt from 'bcryptjs';


export class UserService {
       
       private userRepo: UserRepository;


       constructor(){
         
           this.userRepo = new UserRepository();
       }


       async registerUser(data: { name: string; email:string, password:string}){
           
          const existingUser = await this.userRepo.findByEmail(data.email);

            if(existingUser) throw new Error("Email already exists");

            const hashedPassword = await bcrypt.hash(data.password, 10);

            return this.userRepo.create({
              name: data.name,
              email: data.email,
              password: hashedPassword,
            })
       }



       async loginUser(email: string, password: string){
           
           const user = await this.userRepo.findByEmail(email);

            if(!user) throw new Error("User not found");

            const isMatch = await bcrypt.compare(password,user.password);

            if(!isMatch) throw new Error("Invalid password");

            return user;
       }


       async getUserById(id: string){
            
            return this.userRepo.findById(id);
       }
}