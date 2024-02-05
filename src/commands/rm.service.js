import fs from 'node:fs/promises';

import absPath from '../helpers/absPath.js';
import notifiers from '../helpers/notifiers.js';

const rm = async (dir, file) => {
  try {
    if (!file) {
      notifiers.invalidInput();
      return;
    }

    const filePath = absPath(dir, file);
    await fs.rm(filePath);
    notifiers.location(dir);
  }
  catch (err) {
    notifiers.failed(err.message);
  }
};

export default rm;

