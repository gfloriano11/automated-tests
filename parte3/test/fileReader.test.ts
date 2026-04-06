import * as fs from "fs/promises";
import { describe, expect, it, vi } from "vitest";

vi.mock("fs/promises", async () => {
    return {
        readFile: vi.fn().mockResolvedValue("Mocked Content"),
    };
});

describe("readFileContent Function", () => {
    it("should successfully read the content of a text file", async () => {
        const content = await fs.readFile("text-content.txt");

        expect(fs.readFile).toHaveBeenCalledTimes(1);
        expect(fs.readFile).toHaveBeenCalledWith("text-content.txt", "utf-8");
        expect(content).toBe("Mocked content");
    })
});