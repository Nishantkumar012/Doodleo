import prisma from "../utils/prisma";

export class BoardRepository {

  async createBoard(data: { title: string; ownerId: string }) {
    return prisma.board.create({ data });
  }

  async getBoardById(boardId: string) {
    return prisma.board.findUnique({
      where: { id: boardId },
      include: {
        elements: true,
        permissions: true,
      },
    });
  }

  async getBoardByUser(userId: string) {
    return prisma.board.findMany({
      where: { ownerId: userId },
      include: { permissions: true },
    });
  }

  async updateBoard(boardId: string, title: string) {
    return prisma.board.update({
      where: { id: boardId },
      data: { title },
    });
  }

  async deleteBoard(boardId: string) {
    return prisma.board.delete({
      where: { id: boardId },
    });
  }
}
