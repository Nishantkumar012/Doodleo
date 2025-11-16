import { OperationRepository } from "../repositories/OperationRepository";

export class OperationService {
  private opRepo: OperationRepository;

  constructor() {
    this.opRepo = new OperationRepository();
  }

  async logOperation(data: {
    boardId: string;
    userId?: string;
    type: string;
    payload: any;
  }) {
    return this.opRepo.createOperation(data);
  }

  async getOperations(boardId: string) {
    return this.opRepo.getOperations(boardId);
  }
}
