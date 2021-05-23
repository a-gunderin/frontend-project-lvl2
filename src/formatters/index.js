import plain from './plain.js';
import stylish from './stylish.js';

const chooseFormatter = (formatter) => {
  if (formatter === 'plain') {
    return plain;
  }
  return stylish;
};

export default chooseFormatter;
