import { changeDir } from "../changeDir.js";

const commands = {
  'cd': (currentDir) => changeDir(currentDir, '..')
}

export default commands
