import { Command } from 'commander/esm.mjs';
import genReport from './utils/genreport.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    genReport(filepath1, filepath2);
  });

export default program;
