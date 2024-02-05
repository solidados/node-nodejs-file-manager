import fs from 'node:fs/promises';

import fileOperation from '../helpers/fileOperations.js';
import absPath from '../helpers/absPath.js';

const mv = async (dir, filePath, file) => {
  await fileOperation(dir, filePath, file, async (destination, data) => {
    await fs.writeFile(destination, data);
    await fs.unlink(absPath(dir, filePath));
  });
};

export default mv;
