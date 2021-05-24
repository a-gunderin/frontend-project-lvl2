import valueIsObj from '../utils/valueisobj.js';

const formatSpacedKeys = (obj) => {
  const result = {};
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    const valueIsObject = valueIsObj(obj, key);
    const keyIsSpaced = key.startsWith('  ');
    if (keyIsSpaced) {
      result[key.substring(2)] = valueIsObject ? formatSpacedKeys(obj[key]) : obj[key];
    } else {
      result[key] = valueIsObject ? formatSpacedKeys(obj[key]) : obj[key];
    }
  });
  return result;
};

const jsonFormatter = (obj) => {
  const objWithoutSpacedKeys = formatSpacedKeys(obj);
  return JSON.stringify(objWithoutSpacedKeys, null, '  ');
};

export default jsonFormatter;
