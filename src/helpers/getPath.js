import { dirname, isAbsolute, join } from 'node:path'
import { fileURLToPath } from 'node:url'

// path to current file
export const getFilename = fileURLToPath(import.meta.url)

// path to current directory
export const getDirname = () => dirname(getFilename)

// absolute path
export const getAbsolutePath = (dir, ...file) => {
  if (isAbsolute(join(...file))) {
    return join(...file)
  } else {
    return join(dir, join(...file))
  }
}
