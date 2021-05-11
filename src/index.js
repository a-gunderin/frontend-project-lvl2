import { Command } from 'commander/esm.mjs';
import genDiff from './utils/gendiff.js';
import parsing from './utils/parsers.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    genDiff(parsing(filepath1), parsing(filepath2));
  });

export default program;
