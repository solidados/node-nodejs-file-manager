import fs from 'node:fs/promises';

import absPath from '../helpers/absPath.js';
import notifiers from '../helpers/notifiers.js';

const add = async (dir, file) => {
  try {
    if (!file) {
      notifiers.invalidInput()
      return;
    }

    const files = await fs.readdir(dir);
    if (files.includes(file)) {
      notifiers.existFile()
      return;
    }

    await fs.writeFile(absPath(dir, file), '');
    notifiers.fileCreated(file)
  }
  catch (err) {
    notifiers.failed(err.message)
  }

  notifiers.location(dir);
};

export default add;
