import { describe, test, expect } from "vitest";

describe("Contém um conjunto de testes, que serão executados um a um", () => {
    test("Deve somar 20 + 50 e retornar 70", () => {
        expect(20 + 50).toBe(70);
    });

    test("Deve concatenar a palavra 'Olá' com a palavra 'Mundo' e retornar 'Olá, mundo!'", () => {
        expect("Olá, " + "Mundo").toBe("Olá, Mundo");
    });

    test("Deve retornar que o Palmeiras não tem mundial", () => {
        const temMundial = false;
        expect(temMundial).toBeFalsy();
    });

    test("Deve conter todos os valores do objeto fornecido", () => {
        const meuObjeto = {
            nome: "Palmeiras",
            temMundial: false,
            cor: "Verde",
            temEstadio: true
        };
        expect(meuObjeto).toEqual({
            nome: "Palmeiras",
            temMundial: false,
            cor: "Verde",
        });
    });
});