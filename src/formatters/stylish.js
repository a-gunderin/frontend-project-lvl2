import valueIsObj from '../utils/valueisobj.js';

const stylish = (obj, indentSize = 2) => {
  const result = ['{'];
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (valueIsObj(obj, key)) {
      result.push(`${' '.repeat(indentSize)}${key}: ${stylish(obj[key], indentSize + 4)}`);
    } else if (obj[key] === '') {
      result.push(`${' '.repeat(indentSize)}${key}:`);
    } else {
      const formattedValue = String(obj[key]).trim();
      result.push(`${' '.repeat(indentSize)}${key}: ${formattedValue}`);
    }
  });
  result.push(`${' '.repeat(indentSize - 2)}}`);
  return result.join('\n');
};

export default stylish;
