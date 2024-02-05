import { EOL } from 'node:os'
import { colors } from "./messageColors.js";

const notifiers = {
  changeFile: () => console.log(`${colors.green}Change file${colors.reset}${EOL}`),
  createdFile: (file) => console.log(`${colors.green}File ${file} created successfully${colors.reset}${EOL}`),
  existFile: () => console.log(`${colors.red}File already exists${colors.reset}${EOL}`),
  failed: () => console.log(`${colors.red}Operation failed${colors.reset}${EOL}`),
  greeting: (username) => console.log(`${EOL}${colors.green}Welcome to the File Manager, ${username}!${colors.reset}`),
  goodbye: (username) => console.log(`${EOL}${colors.yellow}Thank you for using File Manager, ${username}, goodbye!${colors.reset}${EOL}`),
  invalid: () => console.log(`${colors.red}Invalid command${colors.reset}${EOL}`),
  invalidInput: () => console.log(`${colors.red}Invalid input${colors.reset}${EOL}`),
  location: (dir) => console.log(`${colors.blue}You are currently in${colors.reset} ${dir}${EOL}`),
}

export default notifiers
