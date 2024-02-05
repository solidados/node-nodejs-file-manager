import fs from 'node:fs/promises';
import path from 'node:path';

import absPath from '../helpers/absPath.js';
import notifiers from "../helpers/notifiers.js";

const mv = async (dir, filePath, file) => {
  try {
    if (!filePath || !file) {
      notifiers.invalidInput();
      return dir;
    }

    let fileWithExt = path.parse(filePath).base;

    const filePathExists = await fs.access(absPath(dir, filePath))
                                   .then(() => true)
                                   .catch(() => false);

    const fileExists = await fs.access(absPath(dir, file))
                               .then(() => true)
                               .catch(() => false);

    if (!filePathExists || !fileExists) {
      notifiers.invalidInput();
      return dir;
    } else {
      const stats = await fs.stat(absPath(dir, filePath));
      if (stats.isFile()) {
        const data = await fs.readFile(absPath(dir, filePath));
        await fs.writeFile(absPath(dir, file, fileWithExt), data);
        await fs.unlink(absPath(dir, filePath));
        notifiers.location(dir);
      } else {
        notifiers.invalidInput();
        return dir;
      }
    }
  }
  catch (err) {
    notifiers.failed(err.message);
  }
};

export default mv;
