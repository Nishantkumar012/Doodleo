import { PermissionRepository } from "../repositories/PermissionRepository";

export class PermissionService {
  private permissionRepo: PermissionRepository;

  constructor() {
    this.permissionRepo = new PermissionRepository();
  }

  async addPermission(data: {
    userId: string;
    boardId: string;
    role: "OWNER" | "EDITOR" | "VIEWER";
  }) {
    return this.permissionRepo.addPermission(data);
  }

  async updatePermission(id: string, role: "EDITOR" | "VIEWER") {
    return this.permissionRepo.updatePermission(id, role);
  }

  async getPermissions(boardId: string) {
    return this.permissionRepo.getPermissions(boardId);
  }

  async removePermission(id: string) {
    return this.permissionRepo.removePermission(id);
  }
}
