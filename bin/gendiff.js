#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import stylish from '../src/core/stylish.js';
import genDiff from '../src/core/gendiff.js';
import parsing from '../src/core/parsers.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', stylish)
  .action((filepath1, filepath2) => {
    const difference = genDiff(parsing(filepath1), parsing(filepath2));
    console.log(stylish(difference));
  });

program.parse();
