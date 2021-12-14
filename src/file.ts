import { promises as fs, PathLike } from 'fs';

type PathType = PathLike;

export class File {
  path: PathType;

  constructor(path: PathType) {
    this.path = path;
  }

  async save(content: string) {
    return fs.writeFile(this.path, content);
  }
}
