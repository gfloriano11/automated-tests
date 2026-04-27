import { expect, test } from "vitest";
import { Calculadora } from "../src/calculadora.js";
import { describe } from "node:test";

describe("this method should add numbers", () => {
    test("Deve somar 10 + 10 e retornar 20", () => {
        const calculadora = new Calculadora();
        const resultado = calculadora.somar(10, 10);
        expect(resultado).toBe(20);
    })
})