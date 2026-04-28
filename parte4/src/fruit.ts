import { Nutritions } from "./nutritions.js";

export class Fruit {
  private constructor(
    readonly id: number,
    readonly genero: string,
    readonly nome: string,
    readonly familia: string,
    readonly ordem: string,
    readonly nutritions: Nutritions
  ) {}

  static create(v: Fruit) {
    if (!v.nome || v.nome.trim().length === 0) {
      throw new Error("Nome é obrigatório!");
    }

    if (v.id <= 0) {
      throw new Error("ID deve ser maior que Zero!");
    }

    return new Fruit(v.id, v.genero, v.nome, v.familia, v.ordem, v.nutritions);
  }
}
