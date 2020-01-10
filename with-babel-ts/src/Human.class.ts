class Human {
  name: string = "S"
  constructor(name: string) {
    this.name = name
  }
  intro() {
    const info = { address: "ma an shan" }
    const o = { age: 32, ...info }
    console.log(`My name is ${this.name} with age ${o.age}`)
  }
}

export {
  Human
}