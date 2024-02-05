import fs from 'node:fs/promises';

import fileOperation from '../helpers/fileOperations.js';

const cp = async (dir, filePath, file) => {
  await fileOperation(dir, filePath, file, fs.writeFile);
};

export default cp;
