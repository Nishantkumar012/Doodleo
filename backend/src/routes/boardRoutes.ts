import { Router } from "express";
import { BoardController } from "../controllers/boardController";

const router = Router();
const boardController = new BoardController();

router.post("/", boardController.createBoard);
router.get("/:id", boardController.getBoardById);
router.get("/user/:userId", boardController.getBoardsForUser);
router.patch("/:id", boardController.renameBoard);
router.delete("/:id", boardController.deleteBoard);

export default router;
