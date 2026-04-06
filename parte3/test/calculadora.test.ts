import { describe, expect, it, test } from "vitest";
import { Calculadora } from "../src/calculadora.js";

// test("Deve somar 10 + 10 e retornar 20", () => {
//     const calculadora = new Calculadora();
//     const resultado = calculadora.somar(10, 10);
//     expect(resultado).toBe(20);
// })

if (import.meta.env.MODE === "TEST") {
    describe("Função somar", () => {
        const calculadora = new Calculadora();
        it("should return 3 when adding 1 and 2", () => {
            expect(calculadora.somar(1, 2)).toBe(3);
        })
        it("should return 5 when adding 2 and 3", () => {
            expect(calculadora.somar(2, 3)).toBe(5);
        })
    });
}