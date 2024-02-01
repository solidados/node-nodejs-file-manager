import { homedir } from "node:os";
import { existsSync } from "node:fs";
import { getAbsolutePath } from "../lib/helpers/getPath.js";
import notifiers from "../lib/helpers/notifiers.js";

let HOME = homedir()

export const changeDir = (dir, file) => {
  if (!file) {
    console.log('Invalid input')
    return HOME
  } else {
    HOME = getAbsolutePath(dir, file)
    if (existsSync(dir)) {
      notifiers.location(dir)
      return HOME
    } else {
      notifiers.failed()
    }
  }
}
