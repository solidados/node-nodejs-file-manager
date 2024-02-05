import fs from 'node:fs';
import { EOL } from "node:os";

import absPath from '../helpers/absPath.js';
import notifiers from "../helpers/notifiers.js";

const cat = (dir, file) => {
  if (!file) {
    notifiers.invalidInput();
  } else {
    let filePath = '';

    if (!fs.existsSync(absPath(dir, file))) {
      notifiers.failed();
    } else {
      filePath = absPath(dir, file);

      const readStream = fs.createReadStream(filePath);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          notifiers.failed();
          return;
        }
        if (stats.isFile()) {
          readStream.on('data', (data) => {
            process.stdout.write(`${data} ${EOL}`);
            notifiers.location(dir);
          });
          readStream.on('error', (err) => {
            if (err) {
              notifiers.failed();
            }
          });
        } else {
          notifiers.changeFile();
        }
      })
    }
  }
}

export default cat;
