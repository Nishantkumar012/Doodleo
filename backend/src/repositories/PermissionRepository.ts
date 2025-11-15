import prisma from "../utils/prisma";

export class PermissionRepository {
  async addPermission(data: {
    userId: string;
    boardId: string;
    role: any;
  }) {
    return prisma.permission.create({ data });
  }

  async getPermissions(boardId: string) {
    return prisma.permission.findMany({ where: { boardId } });
  }

  async getUserRole(boardId: string, userId: string) {
    return prisma.permission.findUnique({
      where: { userId_boardId: { userId, boardId } },
    });
  }
}
