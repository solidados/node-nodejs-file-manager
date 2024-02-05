import fs from 'node:fs/promises';
import { EOL } from 'node:os';

import absPath from '../helpers/absPath.js';
import notifiers from '../helpers/notifiers.js';
import { colors } from '../helpers/messageColors.js';

const cat = async (dir, file) => {
  if (!file) {
    notifiers.invalidInput();
    return;
  }

  const filePath = absPath(dir, file);

  try {
    const stats = await fs.stat(filePath);

    if (!stats.isFile()) {
      notifiers.changeFile();
      return;
    }

    const data = await fs.readFile(filePath, 'utf8');

    // Create a frame for the output
    const framedData = `${colors.cyan}┌${'─'.repeat(50)}┐\n${data.split(EOL).map(line => `│ ${line}`).join(EOL)}\n└${'─'.repeat(50)}┘${colors.reset}`;

    console.log(framedData);
    notifiers.location(dir);
  }
  catch (err) {
    notifiers.failed(err.message);
  }
}

export default cat;
