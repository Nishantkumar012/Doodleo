import { SessionRepository } from "../repositories/SessionRepository";

export class SessionService {
  private sessionRepo: SessionRepository;

  constructor() {
    this.sessionRepo = new SessionRepository();
  }

  async startSession(boardId: string, userId?: string) {
    return this.sessionRepo.startSession({ boardId, userId });
  }

  async endSession(sessionId: string) {
    return this.sessionRepo.endSession(sessionId);
  }

  async getActiveSessions(boardId: string) {
    return this.sessionRepo.getActiveSessions(boardId);
  }
}
