import rl from "./readLine.js";
import commands from "../../lib/interface/commands.js";
import notifiers from "../../lib/helpers/notifiers.js";
import constants from "../../lib/constants/constants.js";

const readlineListener = () => {
  rl.on('line', async (data) => {
    const [command, ...args] = data.split(' ');
    const commandToExecute = commands[command];
    if (commandToExecute) {
      commandToExecute(...args);
    } else if (command !== '.exit') {
      notifiers.invalid();
    } else {
      notifiers.goodbye(constants.username);
      rl.close();
    }
  });

  rl.on('SIGINT', () => {
    notifiers.goodbye(constants.username);
    rl.close();
  });
};

export default readlineListener;
