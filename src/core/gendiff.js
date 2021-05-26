import _ from 'lodash';
import objHasKey from '../utils/objhaskey.js';
import valueIsObj from '../utils/valueisobj.js';

const genDiff = (obj1, obj2) => {
  const keys = _.orderBy(Object.keys({ ...obj1, ...obj2 }));
  const result = keys.map((key) => {
    const hasKey1 = objHasKey(obj1, key);
    const hasKey2 = objHasKey(obj2, key);
    const value1IsObj = valueIsObj(obj1, key);
    const value2IsObj = valueIsObj(obj2, key);
    if (hasKey1 && hasKey2) {
      if (value1IsObj && value2IsObj) {
        return { [`  ${key}`]: genDiff(obj1[key], obj2[key]) };
      } if (value1IsObj && !value2IsObj) {
        return { [`- ${key}`]: genDiff(obj1[key], obj1[key]), [`+ ${key}`]: obj2[key] };
      } if (!value1IsObj && value2IsObj) {
        return { [`- ${key}`]: obj1[key], [`+ ${key}`]: genDiff(obj2[key], obj2[key]) };
      } if (obj1[key] === obj2[key]) {
        return { [`  ${key}`]: obj1[key] };
      }
      return { [`- ${key}`]: obj1[key], [`+ ${key}`]: obj2[key] };
    } if (!hasKey2) {
      return { [`- ${key}`]: value1IsObj ? genDiff(obj1[key], obj1[key]) : obj1[key] };
    } if (!hasKey1) {
      return { [`+ ${key}`]: value2IsObj ? genDiff(obj2[key], obj2[key]) : obj2[key] };
    }
    return null;
  });
  return Object.assign({}, ...result);
};

export default genDiff;
