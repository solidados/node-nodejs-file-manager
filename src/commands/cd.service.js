import { homedir as getHomeDir } from 'node:os';
import { existsSync } from 'node:fs';

import absPath from '../helpers/absPath.js';
import notifiers from "../helpers/notifiers.js";

let currentDir = getHomeDir();

const cd = (dir, file) => {
  if (!file) {
    notifiers.invalid();
    return currentDir;
  }

  const newPath = absPath(dir, file);

  if (existsSync(newPath)) {
    currentDir = newPath;
    notifiers.location(currentDir);
  } else {
    notifiers.failed();
  }

  return currentDir;
};

export default cd;
