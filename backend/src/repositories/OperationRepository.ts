import prisma from "../utils/prisma";

export class OperationRepository {
  async logOperation(data: {
    boardId: string;
    userId?: string;
    type: string;
    payload: any;
  }) {
    return prisma.operation.create({ data });
  }

  async getOperations(boardId: string) {
    return prisma.operation.findMany({
      where: { boardId },
      orderBy: { createdAt: "asc" }
    });
  }
}
