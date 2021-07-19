import { promises as fs } from 'fs';

type FilenameType = string;

export class File {
  filename: FilenameType;

  constructor(filename: FilenameType) {
    this.filename = filename;
  }

  save(content: string) {
    return fs.writeFile(this.filename, content);
  }
}
