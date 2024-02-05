import readline from "node:readline";
import process from "node:process";
import { colors } from "../helpers/messageColors.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `${colors.some}→ ${colors.reset}`
})

export default rl;
