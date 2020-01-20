import { name } from "./foo"
import(/* webpackChunkName: "bar" */"./bar")
// I am index.js, the entry point
console.log(name)