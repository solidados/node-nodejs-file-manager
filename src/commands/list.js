import fs from "node:fs";
import path from 'node:path'

const currentDir = process.cwd()

export const ls = (currentDir) => {
  try {
    const dirContent = fs.readdirSync(currentDir);
    const files = dirContent.filter((item) => fs.statSync(path.join(currentDir, item)).isFile());
    const folders = dirContent.filter((item) => fs.statSync(path.join(currentDir, item)).isDirectory());

    const sortedContent = [...folders.sort(), ...files.sort()]

    sortedContent.forEach((item) => {
      const type = fs.statSync(path.join(currentDir, item)).isDirectory()
        ? 'Folder'
        : 'File'
      console.table(`${type}: ${item}`)
    })
  }
  catch (err) {
    console.error(`FS operation failed: ${err.message}`)
  }
}
