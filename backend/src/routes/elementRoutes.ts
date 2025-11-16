import { Router } from "express";
import { ElementController } from "../controllers/elementController";

const router = Router();
const controller = new ElementController();

router.post("/", controller.createElement);
router.get("/board/:boardId", controller.getElements);
router.patch("/:id", controller.updateElement);
router.delete("/:id", controller.deleteElement);

export default router;
