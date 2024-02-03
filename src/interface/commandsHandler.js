import { ls } from "../commands/list.js";

global.state = {
  currentPath: '/default/path',
};

export const HandleCommand = (command, currentDir, ...args) => {
  switch (command) {
    case 'ls':
      ls(currentDir)
      break
    // case 'cd':
    //   commands.cd();
    //   global.state.currentPath = '';
    //   break;
  }
}
