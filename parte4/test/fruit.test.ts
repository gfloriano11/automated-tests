import { before } from "node:test";
import { Nutritions } from "../src/nutritions.js";
import { beforeAll, expect, test } from "vitest";
import { Fruit } from "../src/fruit.js";

let nutritions: Nutritions;

beforeAll(() => {
    nutritions = Nutritions.create({
        carboidratos: 4,
        acucares: 2,
        calorias: 397,
        gorduras: 67,
        proteinas: 1,
    });
});

test("Deve criar uma fruta", () => {
    const fruit = Fruit.create({
        id: 1,
        genero: "Musa",
        nome: "Banana",
        familia: "Musaceae",
        ordem: "Zingiberales",
        nutritions,
    });
    
    expect(fruit).toEqual({
        familia: "Musaceae",
        genero: "Musa",
        id: 1,
        nome: "Banana",
        ordem: "Zingiberales",
        nutritions: {
            calorias: 397,
            carboidratos: 4,
            gorduras: 67,
            proteinas: 1,
            acucares: 2,
        }
    });
});

test("Deve validar se o ID é positivo", () => {
    try {
        Fruit.create({
            id: -1,
            genero: "Musa",
            nome: "Banana",
            familia: "Musaceae",
            ordem: "Zingiberales",
            nutritions,
        })
    } catch (error: any) {
        expect(error.message).toBe("ID deve ser maior que Zero!");
    }
});

test("Deve validar se nome é branco ou nulo", () => {
    try {
        Fruit.create({
            id: 1,
            genero: "Musa",
            nome: "",
            familia: "Musaceae",
            ordem: "Zingiberales",
            nutritions,
        })
    } catch (error: any) {
        expect(error.message).toBe("Nome é obrigatório!");
    }
});