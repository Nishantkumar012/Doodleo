import prisma from "../utils/prisma";

export class SessionRepository {
  async startSession(data: { boardId: string; userId?: string }) {
    return prisma.session.create({ data });
  }

  async endSession(id: string) {
    return prisma.session.update({
      where: { id },
      data: { endedAt: new Date() },
    });
  }

  async getActiveSessions(boardId: string) {
    return prisma.session.findMany({
      where: { boardId, endedAt: null },
    });
  }
}
