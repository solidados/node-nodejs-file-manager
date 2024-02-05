import { argv } from "node:process";
import constants from "../constants/constants.js";
import notifiers from "../helpers/notifiers.js";

const openSession = () => {
  const HOME = constants.homedir;
  const args = argv.slice(2);

  (!args || !args.join('').startsWith('--username='))
    ? constants.username = 'Guest'
    : constants.username = args.join('').split('=')[1];

  notifiers.greeting(constants.username);
  notifiers.location(HOME)
}

export default openSession;
