import { homedir as getHomeDir } from 'node:os';

import { ls } from "../commands/ls.service.js";
import cd from "../commands/cd.service.js";

let currentDir = getHomeDir();

const commands = {
  'up': () => currentDir = cd(currentDir, '..'),
  'cd': (file) => currentDir = cd(currentDir, file),
  'ls': () => ls(currentDir),
}

export default commands
