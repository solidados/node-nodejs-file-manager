import path from 'node:path';

const absolutePath = (dir, ...file) =>
  path.isAbsolute(path.join(...file))
    ? path.join(...file)
    : path.join(dir, path.join(...file));

export default absolutePath;
