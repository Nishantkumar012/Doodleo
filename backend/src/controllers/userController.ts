import {Request,Response} from 'express'
import { UserService } from '../services/UserService';
import { AuthRequst } from "../middleware/authMiddleware";

export class UserController{
       
      private userServ: UserService;
      constructor(){
          
        this.userServ = new UserService();
      }


       register = async(req:Request, res:Response) =>{
          
            try {
                   const user = await this.userServ.registerUser(req.body);
                   res.status(201).json({ message: "User registered", user })
            } catch (err: any) {
                res.status(400).json({ error: err.message})
            }
       }


       login = async(req:Request, res:Response) => {
              
           try {
                   const {email, password} = req.body;

                   const user = await this.userServ.loginUser(email,password);

                   res.json({ message: "Login successful", user });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  // GET USER
  getUser = async (req: Request, res: Response) => {
    try {
      const user = await this.userServ.getUserById(req.params.id);
      if (!user) return res.status(404).json({ error: "User not found" });

      res.json(user);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  };

        async getMe(req: AuthRequst, res: Response) {
    try {
      const userId = req.user?.id  ; // added by authMiddleware
      
      if (!userId) return res.status(401).json({ success: false, message: 'Not authenticated' });
      const user = await this.userServ.getUserById(userId);

      return res.json({
        success: true,
        user,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch user",
      });
    }
  }
}