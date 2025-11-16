
import { Request, Response } from "express";
import { BoardService } from "../services/BoardService";

export class BoardController {
  private boardService: BoardService;

  constructor() {
    this.boardService = new BoardService();
  }

  // Create a new board
  createBoard = async (req: Request, res: Response) => {
    try {
      const { title, ownerId } = req.body;

      const board = await this.boardService.createBoard({ title, ownerId });
      return res.status(201).json(board);

    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };

  // Get board by ID
  getBoardById = async (req: Request, res: Response) => {
    try {
      const boardId = req.params.id;

      const board = await this.boardService.getBoardById(boardId);
      if (!board) return res.status(404).json({ message: "Board not found" });

      return res.json(board);

    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };

  // Get all boards for a user
  getBoardsForUser = async (req: Request, res: Response) => {
    try {
      const userId = req.params.userId;

      const boards = await this.boardService.getBoardsForUser(userId);
      return res.json(boards);

    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };

  // Rename
  renameBoard = async (req: Request, res: Response) => {
    try {
      const boardId = req.params.id;
      const { title } = req.body;

      const updated = await this.boardService.renameBoard(boardId, title);
      return res.json(updated);

    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };

  // Delete
  deleteBoard = async (req: Request, res: Response) => {
    try {
      const boardId = req.params.id;

      await this.boardService.deleteBoard(boardId);
      return res.json({ message: "Board deleted" });

    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };
}
