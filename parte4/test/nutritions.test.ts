import { expect, test } from "vitest";
import { Nutritions } from "../src/nutritions.js";

test("Deve criar uma tabela nutricional", () => {
    const nutritions = Nutritions.create({
        carboidratos: 22,
        acucares: 17.2,
        proteinas: 0,
        gorduras: 0.2,
        calorias: 96,
    });

    expect(nutritions).toEqual({
        carboidratos: 22,
        acucares: 17.2,
        proteinas: 0,
        gorduras: 0.2,
        calorias: 96,
    })
});

test("Deve validar se calorias é zero e carboidratos é menor que 10", () => {
    try {
        Nutritions.create({
            carboidratos: 20,
            acucares: 1.2,
            proteinas: 0,
            gorduras: 0.2,
            calorias: 20,  
        })
    } catch (error: any) {
        expect(error.message).toBe(
            "Zero calorias requer que a quantidade de carboidratos seja menor a 10"
        );
    }
});