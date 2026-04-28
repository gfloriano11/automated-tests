import { describe, expect, it, beforeEach } from "vitest";
import { FruitService } from "../src/FruitService.js";
import { Fruit } from "../src/fruit.js";
import { Nutritions } from "../src/nutritions.js";

describe("FruitService", () => {
    let service: FruitService;
    let fruit: any;

    beforeEach(() => {
        service = new FruitService();
        const nutritions = Nutritions.create({
            carboidratos: 5,
            proteinas: 1,
            gorduras: 0,
            calorias: 50,
            acucares: 5,
        });

        fruit = Fruit.create({
            id: 1,
            nome: "Banana",
            nutritions,
        });
    });

    it("Deve criar uma fruta", () => {
        service.add(fruit); 
        expect(service.getAll()).toHaveLength(1);
    });

    it("Deve validar para não ser duplicada", () => {
        service.add(fruit); 
        expect(() => service.add(fruit)).toThrow();
    });

    it("Deve buscar pelo ID", () => {
        service.add(fruit); 
        expect(service.getById(1)).toBeDefined();
    });

    it("Deve atualizar as informações de uma fruta",() => {
        service.add(fruit); 
        service.update(1, { name: "Banana Prata" }); 
        expect(service.getById(1).name).toBe("Banana Prata"); 
    });

    it("Deve excluir uma fruta", () => {
        service.add(fruit);
        service.remove(1);
        expect(service.getAll()).toHaveLength(0);
    });

    it("Deve buscar uma fruta", () => {
        service.add(fruit);
        const result = service.findByName("banana");
        expect(result.length).toBe(1);
    });
});