

import prisma from "../utils/prisma"


export class ElementRepository {
  async createElement(data: {
    boardId: string;
    type: string;
    data: any;
    version: number;
  }) {
    return prisma.element.create({ data });
  }

  async getElementsByBoard(boardId: string) {
    return prisma.element.findMany({ where: { boardId } });
  }

  async updateElement(id: string, data: any, version: number) {
    return prisma.element.update({
      where: { id },
      data: { data, version },
    });
  }

  async deleteElement(id: string) {
    return prisma.element.delete({ where: { id } });
  }
}