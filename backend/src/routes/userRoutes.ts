
import { Router } from "express";
import { UserController } from "../controllers/userController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();
const controller = new UserController();

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/:id", controller.getUser);
router.get("/me", authMiddleware, (req, res) =>
  controller.getMe(req, res)
);

export default router;
