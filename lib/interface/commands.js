import { changeDir } from "../../src/changeDir.js";

const commands = {
  'up': (dir) => dir = changeDir(dir, '..')
}

export default commands
