import genDiff from './core/gendiff.js';
import parsing from './core/parsers.js';
import stylish from './core/stylish.js';

export default (filepath1, filepath2) => {
  const difference = genDiff(parsing(filepath1), parsing(filepath2));
  return stylish(difference);
};
