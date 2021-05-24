import objHasKey from '../utils/objhaskey.js';
import valueIsObj from '../utils/valueisobj.js';

const genDiff = (obj1, obj2) => {
  const result = {};
  const keys = Object.keys({ ...obj1, ...obj2 })
    .sort((a, b) => a.localeCompare(b));
  keys.forEach((key) => {
    const hasKey1 = objHasKey(obj1, key);
    const hasKey2 = objHasKey(obj2, key);
    const value1IsObj = valueIsObj(obj1, key);
    const value2IsObj = valueIsObj(obj2, key);
    if (hasKey1 && hasKey2) {
      if (value1IsObj && value2IsObj) {
        result[`  ${key}`] = genDiff(obj1[key], obj2[key]);
      } else if (value1IsObj && !value2IsObj) {
        result[`- ${key}`] = genDiff(obj1[key], obj1[key]);
        result[`+ ${key}`] = obj2[key];
      } else if (!value1IsObj && value2IsObj) {
        result[`- ${key}`] = obj1[key];
        result[`+ ${key}`] = genDiff(obj2[key], obj2[key]);
      } else if (obj1[key] === obj2[key]) {
        result[`  ${key}`] = obj1[key];
      } else {
        result[`- ${key}`] = obj1[key];
        result[`+ ${key}`] = obj2[key];
      }
    } else if (hasKey1 && !hasKey2) {
      result[`- ${key}`] = value1IsObj ? genDiff(obj1[key], obj1[key]) : obj1[key];
    } else if (!hasKey1 && hasKey2) {
      result[`+ ${key}`] = value2IsObj ? genDiff(obj2[key], obj2[key]) : obj2[key];
    }
    return null;
  });
  return result;
};

export default genDiff;
