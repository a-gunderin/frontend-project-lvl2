import genDiff from './core/gendiff.js';
import parsing from './core/parsers.js';
import chooseFormatter from './formatters/index.js';

export default (filepath1, filepath2, formatName) => {
  const difference = genDiff(parsing(filepath1), parsing(filepath2));
  if (formatName === 'plain') {
    return chooseFormatter('plain')(difference);
  }
  return chooseFormatter()(difference);
};
