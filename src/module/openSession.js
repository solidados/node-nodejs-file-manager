import { homedir } from "node:os";
import { argv } from "node:process";
import constants from "../../lib/constants/constants.js";
import notifiers from "../../lib/helpers/notifiers.js";

const openSession = () => {
  const HOME = homedir()
  const args = argv.slice(2);

  (!args || !args.join('').startsWith('--username='))
    ? constants.username = 'Guest'
    : constants.username = args.join('').split('=')[1];

  notifiers.greeting(constants.username);
  notifiers.location(HOME)
}

export default openSession;
