import { homedir as getHomeDir } from 'node:os';
import fs from 'node:fs/promises';
import path from 'node:path';

import absPath from '../helpers/absPath.js';
import notifiers from '../helpers/notifiers.js';

let currentDir = getHomeDir();

const rn = async (dir, filePath, file) => {
  try {
    if (!filePath || !file) {
      notifiers.invalidInput();
      return dir;
    }

    let newPath = path.parse(filePath).dir;
    let oldFile = path.parse(filePath).base;

    try {
      await fs.access(absPath(dir, newPath, oldFile));
    }
    catch (err) {
      notifiers.failed(err.message);
      return dir;
    }

    await fs.rename(absPath(dir, newPath, oldFile), absPath(dir, newPath, file));
    notifiers.fileRenamed(file);

    currentDir = absPath(dir, newPath);
    notifiers.location(currentDir);
    return currentDir;
  }
  catch (err) {
    notifiers.failed(err.message);
    return dir;
  }
};

export default rn;
