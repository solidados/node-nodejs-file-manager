import fs from "node:fs/promises";
import path from 'node:path';
import notifiers from "../helpers/notifiers.js";

export const ls = async (dir) => {
  try {
    const files = await fs.readdir(dir);
    const statsPromises = files.map(file => fs.stat(path.join(dir, file)).catch(() => null));
    const stats = await Promise.all(statsPromises);

    const fileInfo = files.map((file, index) => {
      const type = stats[index]?.isDirectory()
        ? 'folder'
        : stats[index]
          ? 'file'
          : 'unknown';
      
      return { name: file, type: type };
    });

    const sortedFiles = fileInfo.sort((a, b) => {
      if (a.type === b.type) {
        return a.name.localeCompare(b.name);
      }
      return a.type === 'folder' ? -1 : 1;
    });

    console.table(sortedFiles);
    notifiers.location(dir);
  }
  catch (err) {
    notifiers.failed();
  }
}
