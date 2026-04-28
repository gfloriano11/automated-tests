export class Nutritions {
  private constructor(
    readonly carboidratos: number,
    readonly proteinas: number,
    readonly gorduras: number,
    readonly calorias: number,
    readonly acucares: number
  ) {}

  static create(v: Nutritions) {
    if (v.calorias === 0 && v.carboidratos >= 10) {
      throw new Error(
        "Zero calorias requer que a quantidade de carboidratos seja menor a 10"
      );
    }

    return new Nutritions(
      v.carboidratos,
      v.proteinas,
      v.gorduras,
      v.calorias,
      v.acucares
    );
  }
}
