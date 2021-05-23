import valueIsObj from '../utils/valueisobj.js';
import valueIsStr from '../utils/valueisstr.js';

const formattedValue = (obj, key) => {
  if (valueIsObj(obj, key)) {
    return '[complex value]';
  }
  if (valueIsStr(obj, key)) {
    return `'${obj[key]}'`;
  }
  return obj[key];
};

const plain = (obj) => {
  const result = [];
  const iter = (objX, complexKey = '') => {
    const keys = Object.keys(objX);
    keys.forEach((key) => {
      const clearKey = key.substring(2);
      const plusKey = `+ ${clearKey}`;
      const minusKey = `- ${clearKey}`;
      const fullPath = `${complexKey}${clearKey}`;
      const startPhrase = `Property '${fullPath}' was`;
      if (key.startsWith('  ') && valueIsObj(objX, key)) {
        iter(objX[key], `${fullPath}.`);
      } else if (key.startsWith('- ') && keys.includes(plusKey)) {
        result.push(`${startPhrase} updated. From ${formattedValue(objX, minusKey)} to ${formattedValue(objX, plusKey)}`);
      } else if (key.startsWith('- ') && !keys.includes(plusKey)) {
        result.push(`${startPhrase} removed`);
      } else if (key.startsWith('+ ') && !keys.includes(minusKey)) {
        result.push(`${startPhrase} added with value: ${formattedValue(objX, plusKey)}`);
      }
    });
  };
  iter(obj);
  return result.join('\n');
};

export default plain;
