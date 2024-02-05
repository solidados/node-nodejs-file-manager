import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream/promises';

import absPath from '../helpers/absPath.js';
import notifiers from '../helpers/notifiers.js';

const decompress = async (dir, filePath, fileDestination) => {
  if (!filePath || !fileDestination) {
    notifiers.invalidInput();
    return dir;
  }

  let fileName = path.basename(filePath, '.br');

  if (!fs.existsSync(absPath(dir, filePath)) || !fs.existsSync(absPath(dir, fileDestination))) {
    notifiers.invalidInput();
  } else {
    try {
      const stats = await fs.promises.stat(absPath(dir, filePath));
      if (stats.isFile()) {
        const readStream = fs.createReadStream(absPath(dir, filePath));
        const writeStream = fs.createWriteStream(absPath(dir, fileDestination, fileName));
        const brotli = zlib.createBrotliDecompress();

        await pipeline(readStream, brotli, writeStream);
      }
    }
    catch (err) {
      notifiers.failed(err.message);
    }
  }
  notifiers.location(dir);
}

export default decompress;
