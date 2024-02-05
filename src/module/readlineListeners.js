import rl from "./readLine.js";
import commands from "../interface/commands.js";
import notifiers from "../helpers/notifiers.js";
import constants from "../constants/constants.js";
// import { colors } from "../helpers/messageColors.js";

const readlineListener = () => {
  const originalPrompt = rl.getPrompt();
  // rl.setPrompt(`${colors.some}→ ${colors.reset}`)

  rl.on('line', async (data) => {
    const [command, ...args] = data.split(' ');
    const commandToExecute = commands[command];

    if (commandToExecute) {
      commandToExecute(...args);
    } else if (command === '.exit') {
      notifiers.goodbye(constants.username);
      rl.close();
    } else {
      notifiers.invalid();
    }
  });

  rl.on('SIGINT', () => {
    notifiers.goodbye(constants.username);
    rl.close();
  });

  rl.on('close', () => {
    rl.setPrompt(originalPrompt);
  });

  rl.prompt()
};

export default readlineListener;
