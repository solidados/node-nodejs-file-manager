import { EOL } from 'node:os'
import { colors } from "./messageColors.js";

const notifiers = {
  location: (dir) => console.log(`${EOL}${colors.blue}Current location>${colors.reset} ${dir}${EOL}`),
  failed: () => console.error('FS operation failed')
}

export default notifiers
