import { homedir as getHomeDir } from 'node:os';

import cd from "../commands/cd.service.js";
import ls from "../commands/ls.service.js";
import cat from "../commands/cat.service.js";
import add from "../commands/add.service.js";

let currentDir = getHomeDir();

const commands = {
  'up': () => currentDir = cd(currentDir, '..'),
  'cd': (file) => currentDir = cd(currentDir, file),
  'ls': () => ls(currentDir),
  'cat': (file) => cat(currentDir, file),
  'add': (file) => add(currentDir, file),
}

export default commands
