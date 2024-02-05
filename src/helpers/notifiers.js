import { EOL } from 'node:os'
import { colors } from "./messageColors.js";

const notifiers = {
  failed: () => console.log(`${colors.red}Operation failed${colors.reset}${EOL}`),
  greeting: (username) => console.log(`${EOL}${colors.green}Welcome to the File Manager, ${username}!${colors.reset}`),
  goodbye: (username) => console.log(`${EOL}${colors.yellow}Thank you for using File Manager, ${username}, goodbye!${colors.reset}${EOL}`),
  invalid: () => console.log(`${colors.red}Invalid command${colors.reset}${EOL}`),
  location: (dir) => console.log(`${colors.blue}You are currently in${colors.reset} ${dir}${EOL}`),
}

export default notifiers
