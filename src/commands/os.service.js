import os from 'node:os';

import notifiers from '../helpers/notifiers.js';
import constants from '../constants/constants.js';

const getEOL = () => {
  const eol = JSON.stringify(os.EOL);
  notifiers.userOutput(eol);
};

const getCPUS = () => {
  const cpuModels = os.cpus().map(cpu => cpu.model);
  console.log(`Overall amount of CPUs: ${cpuModels.length}\n${cpuModels.join('\n')}`);
};

const getHomedir = () => {
  const homeDir = constants.homedir;
  notifiers.userOutput(homeDir);
};

const getUsername = () => {
  const username = os.userInfo({ encoding: 'utf-8' }).username;
  notifiers.userOutput(username);
};

const getArch = () => {
  const architecture = os.arch();
  notifiers.userOutput(architecture);
};

const osOptions = {
  '--EOL': getEOL,
  '--cpus': getCPUS,
  '--homedir': getHomedir,
  '--username': getUsername,
  '--architecture': getArch
};

const getSysInfo = async (currentDir, file) => {
  try {
    const operation = osOptions[file];
    if (operation) {
      await operation();
      notifiers.location(currentDir);
    } else {
      notifiers.invalidInput();
    }
  }
  catch (err) {
    notifiers.failed(err.message);
  }
};

export default getSysInfo;

