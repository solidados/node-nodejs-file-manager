import { homedir as getHomeDir } from 'node:os';

import cd from "../commands/cd.service.js";

let currentDir = getHomeDir();

const commands = {
  'up': () => currentDir = cd(currentDir, '..'),
  'cd': (file) => currentDir = cd(currentDir, file),
}

export default commands
