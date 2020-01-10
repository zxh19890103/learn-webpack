// import "core-js"
import { Human } from "./Human.class"


class Female extends Human {
  isFemale: boolean = true
}

const human = new Human("Singhi")
human.intro()

const female = new Female("Wf")
female.intro()

const str = "Singhi"
const newStr = str.padEnd(10, "A")
console.log(newStr)

const arr = Array.from({ '1': 1, '2': 2, length: 2 })
console.log(arr)

const p = new Promise((r, j) => { r('ok') })
p.then(console.log)