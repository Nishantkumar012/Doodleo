import { Request, Response } from "express";
import { ElementService } from "../services/ElementService";

export class ElementController {
  private elementService: ElementService;

  constructor() {
    this.elementService = new ElementService();
  }

  // CREATE ELEMENT
  createElement = async (req: Request, res: Response) => {
    try {
      const { boardId } = req.params;
      const { type, elementData } = req.body;

      const element = await this.elementService.createElement({
        boardId,
        type,
        elementData,
      });

      return res.status(201).json({ success: true, element });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message });
    }
  };

  // UPDATE ELEMENT
  updateElement = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { newData, version } = req.body;

      const updated = await this.elementService.updateElement(id, newData, version);

      return res.json({ success: true, element: updated });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message });
    }
  };

  // DELETE ELEMENT
  deleteElement = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await this.elementService.deleteElement(id);

      return res.json({ success: true, message: "Element deleted" });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message });
    }
  };

  // GET ALL ELEMENTS IN BOARD
  getElements = async (req: Request, res: Response) => {
    try {
      const { boardId } = req.params;

      const elements = await this.elementService.getElements(boardId);

      return res.json({ success: true, elements });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message });
    }
  };
}
