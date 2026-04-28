export class FruitService {
  private fruits: any[] = [];

  add(fruit: any) {
    if (this.fruits.find(f => f.id === fruit.id)) {
      throw new Error("Fruta já cadastrada!");
    }
    this.fruits.push(fruit);
  }

  getAll() {
    return this.fruits;
  }

  getById(id: number) {
    const fruit = this.fruits.find(f => f.id === id);
    if (!fruit) throw new Error("Fruta não encontrada!");
    return fruit;
  }

  update(id: number, data: any) {
    const fruit = this.getById(id);
    Object.assign(fruit, data);
  }

  remove(id: number) {
    const index = this.fruits.findIndex(f => f.id === id);
    if (index === -1) throw new Error("Fruta não encontrada!");
    this.fruits.splice(index, 1);
  }

  findByName(nome: string) {
    return this.fruits.filter(f =>
      f.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }
}
