import prisma from "../utils/prisma";

export class PermissionRepository {
  async addPermission(data: {
    userId: string;
    boardId: string;
    role: "OWNER" | "EDITOR" | "VIEWER";
  }) {
    return prisma.permission.create({ data });
  }

  async getPermissions(boardId: string) {
    return prisma.permission.findMany({
      where: { boardId },
    });
  }

  async updatePermission(id: string, role: "EDITOR" | "VIEWER") {
    return prisma.permission.update({
      where: { id },
      data: { role }
    });
  }

  async removePermission(id: string) {
    return prisma.permission.delete({
      where: { id }
    });
  }

  async getUserRole(boardId: string, userId: string) {
    return prisma.permission.findUnique({
      where: {
        userId_boardId: { userId, boardId }
      },
    });
  }
}
