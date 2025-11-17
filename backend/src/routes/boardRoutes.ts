import { Router } from "express";
import { BoardController } from "../controllers/boardController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();
const boardController = new BoardController();

router.post("/", authMiddleware, boardController.createBoard);
router.get("/:id", authMiddleware, boardController.getBoardById);
router.put("/:id", authMiddleware, boardController.renameBoard);
router.delete("/:id", authMiddleware, boardController.deleteBoard);

export default router;
