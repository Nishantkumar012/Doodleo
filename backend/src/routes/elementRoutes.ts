import { Router } from "express";
import { ElementController } from "../controllers/elementController";
import { authMiddleware } from "../middleware/authMiddleware";


const router = Router();
const controller = new ElementController();

// router.post("/", controller.createElement);
// router.get("/board/:boardId", controller.getElements);
// router.patch("/:id", controller.updateElement);
// router.delete("/:id", controller.deleteElement);

  
router.post("/", authMiddleware,controller.createElement);
router.put("/:id", authMiddleware, controller.updateElement);
router.delete("/:id", authMiddleware, controller.deleteElement);
router.get("/:boardId", authMiddleware, controller.getElements);



export default router;
