import { homedir } from "node:os";
import { changeDir } from "../../src/changeDir.js";

let currentDir = homedir()

const commands = {
  'up': () => currentDir = changeDir(currentDir, '..')
}

export default commands
