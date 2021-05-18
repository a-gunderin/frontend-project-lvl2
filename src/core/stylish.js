import valueIsObj from '../utils/valueisobj.js';

const stylish = (obj, indentSize = 2) => {
  let result = '{\n';
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (valueIsObj(obj, key)) {
      result += `${' '.repeat(indentSize)}${key}: ${stylish(obj[key], indentSize + 4)}\n`;
    } else if (obj[key] === '') {
      result += `${' '.repeat(indentSize)}${key}:\n`;
    } else {
      const formattedValue = String(obj[key]).trim();
      result += `${' '.repeat(indentSize)}${key}: ${formattedValue}\n`;
    }
  });
  result += `${' '.repeat(indentSize - 2)}}`;
  return result;
};

export default stylish;
