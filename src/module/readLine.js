import readline from "node:readline";
import process from "node:process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

export default rl;
