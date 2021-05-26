import valueIsObj from '../utils/valueisobj.js';

const formatSpacedKeys = (obj) => {
  const keys = Object.keys(obj);
  const result = keys.map((key) => {
    const valueIsObject = valueIsObj(obj, key);
    const keyIsSpaced = key.startsWith('  ');
    if (keyIsSpaced) {
      return { [key.substring(2)]: valueIsObject ? formatSpacedKeys(obj[key]) : obj[key] };
    }
    return { [key]: valueIsObject ? formatSpacedKeys(obj[key]) : obj[key] };
  });
  return Object.assign({}, ...result);
};

const jsonFormatter = (obj) => {
  const objWithoutSpacedKeys = formatSpacedKeys(obj);
  return JSON.stringify(objWithoutSpacedKeys, null, '  ');
};

export default jsonFormatter;
