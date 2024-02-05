import { homedir as getHomeDir } from 'node:os';

import cd from '../commands/cd.service.js';
import ls from '../commands/ls.service.js';
import cat from '../commands/cat.service.js';
import add from '../commands/add.service.js';
import rn from '../commands/rn.service.js';
import cp from '../commands/cp.service.js';

let currentDir = getHomeDir();

const commands = {
  'up': () => currentDir = cd(currentDir, '..'),
  'cd': (file) => currentDir = cd(currentDir, file),
  'ls': () => ls(currentDir).catch(err => console.error(err.message)),
  'cat': (file) => cat(currentDir, file).catch(err => console.error(err.message)),
  'add': (file) => add(currentDir, file).catch(err => console.error(err.message)),
  'rn': (filePath, file) => currentDir = rn(currentDir, filePath, file).catch(err => console.error(err.message)),
  'cp': (filePath, file) => cp(currentDir, filePath, file).catch(err => console.error(err.message)),
}

export default commands
