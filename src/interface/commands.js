import { homedir as getHomeDir } from 'node:os';

import cdService from '../commands/cd.service.js';
import lsService from '../commands/ls.service.js';
import catService from '../commands/cat.service.js';
import addService from '../commands/add.service.js';
import rnService from '../commands/rn.service.js';
import cpService from '../commands/cp.service.js';
import mvService from '../commands/mv.service.js';
import rmService from '../commands/rm.service.js';
import getSysInfo from '../commands/os.service.js';
import hashService from '../commands/hash.service.js';
import compressService from "../commands/compress.service.js";

let currentDir = getHomeDir();

const commands = {
  'up': () => currentDir = cdService(currentDir, '..'),
  'cd': (file) => currentDir = cdService(currentDir, file),
  'ls': () => lsService(currentDir).catch(err => console.error(err.message)),
  'cat': (file) => catService(currentDir, file).catch(err => console.error(err.message)),
  'add': (file) => addService(currentDir, file).catch(err => console.error(err.message)),
  'rn': (filePath, file) => currentDir = rnService(currentDir, filePath, file).catch(err => console.error(err.message)),
  'cp': (filePath, file) => cpService(currentDir, filePath, file).catch(err => console.error(err.message)),
  'mv': (filePath, file) => mvService(currentDir, filePath, file).catch(err => console.error(err.message)),
  'rm': (filePath, file) => rmService(currentDir, filePath, file).catch(err => console.error(err.message)),
  'os': (file) => getSysInfo(currentDir, file).catch(err => console.error(err.message)),
  'hash': (file) => hashService(currentDir, file).catch(err => console.error(err.message)),
  'compress': (filePath, fileDestination) => compressService(currentDir, filePath, fileDestination).catch(err => console.error(err.message)),
}

export default commands
