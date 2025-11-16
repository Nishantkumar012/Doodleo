
import { Request, Response } from "express";
import { PermissionService } from "../services/PermissionService";

export class PermissionController {
  private permissionService: PermissionService;

  constructor() {
    this.permissionService = new PermissionService();
  }

  // Add permission (invite user or assign role)
  addPermission = async (req: Request, res: Response) => {
    try {
      const { userId, boardId, role } = req.body;

      const permission = await this.permissionService.addPermission({
        userId,
        boardId,
        role,
      });

      return res.status(201).json(permission);

    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };

  // Get permissions for a board
  getPermissions = async (req: Request, res: Response) => {
    try {
      const boardId = req.params.boardId;

      const permissions = await this.permissionService.getPermissions(boardId);
      return res.json(permissions);

    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };

  // Update role (EDITOR <-> VIEWER)
  updatePermission = async (req: Request, res: Response) => {
    try {
      const permissionId = req.params.id;
      const { role } = req.body;

      const updated = await this.permissionService.updatePermission(permissionId, role);

      return res.json(updated);

    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };

  // Remove permission
  removePermission = async (req: Request, res: Response) => {
    try {
      const permissionId = req.params.id;

      await this.permissionService.removePermission(permissionId);
      return res.json({ message: "Permission removed" });

    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };
}
