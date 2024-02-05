import fs from 'node:fs/promises';
import crypto from 'node:crypto';

import absPath from '../helpers/absPath.js';
import notifiers from '../helpers/notifiers.js';

const hash = async (dir, file) => {
  if (!file) {
    notifiers.invalidInput();
    return;
  }

  try {
    const data = await fs.readFile(absPath(dir, file));
    const hash = crypto
      .createHash('sha256')
      .update(data)
      .digest('hex');

    notifiers.userOutput(hash);
    notifiers.location(dir);
  }
  catch (err) {
    notifiers.failed(err.message);
  }
};

export default hash;
