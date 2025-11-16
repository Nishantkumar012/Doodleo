import { ElementRepository } from "../repositories/ElementRepository";

export class ElementService {
  private elementRepo: ElementRepository;

  constructor() {
    this.elementRepo = new ElementRepository();
  }

  async createElement(data: {
    boardId: string;
    type: string;
    elementData: any;
  }) {
    return this.elementRepo.createElement({
      boardId: data.boardId,
      type: data.type,
      data: data.elementData,
      version: 1,
    });
  }

  async updateElement(id: string, newData: any, version: number) {
    return this.elementRepo.updateElement(id, newData, version);
  }

  async deleteElement(id: string) {
    return this.elementRepo.deleteElement(id);
  }

  async getElements(boardId: string) {
    return this.elementRepo.getElements(boardId);
  }
}
