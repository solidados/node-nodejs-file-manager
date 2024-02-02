import { homedir } from "node:os";
import { existsSync } from "node:fs";
import { getAbsolutePath } from "../lib/helpers/getPath.js";
import notifiers from "../lib/helpers/notifiers.js";

let currentDir = homedir()

export const changeDir = (dir, file) => {
  if (!file) {
    console.log('Invalid input')
    return currentDir
  } else {
    currentDir = getAbsolutePath(dir, file)
    if (existsSync(currentDir)) {
      notifiers.location(currentDir);
      return currentDir
    } else {
      notifiers.failed()
      return dir
    }
  }
}
