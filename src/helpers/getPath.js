import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// path to current file
export const getFilename = fileURLToPath(import.meta.url)

// path to current directory
export const getDirname = () => dirname(getFilename)
