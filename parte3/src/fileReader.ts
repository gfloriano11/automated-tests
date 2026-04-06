import { readFile } from "fs/promises";

export async function readFileContent(filePath: string) {
    try {
        const content = await readFile(filePath, "utf-8");
    } catch (error: any) {
        throw new Error("Failed to read file: ", error.message);
    }
}