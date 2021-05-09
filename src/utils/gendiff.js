import _ from 'lodash';

const genDiff = (obj1, obj2) => {
  const keys = Object.keys(obj1).concat(Object.keys(obj2));
  const sortedKeys = _.uniq(keys)
    .sort((a, b) => a.localeCompare(b));
  const resultArr = [];
  sortedKeys.forEach((key) => {
    const hasProp1 = Object.prototype.hasOwnProperty.call(obj1, key);
    const hasProp2 = Object.prototype.hasOwnProperty.call(obj2, key);

    if (hasProp1 && hasProp2) {
      if (obj1[key] === obj2[key]) {
        resultArr.push(`  ${key}: ${obj1[key]}`);
      } else {
        resultArr.push(`- ${key}: ${obj1[key]}`);
        resultArr.push(`+ ${key}: ${obj2[key]}`);
      }
    } else if (hasProp1 && !hasProp2) {
      resultArr.push(`- ${key}: ${obj1[key]}`);
    } else if (!hasProp1 && hasProp2) {
      resultArr.push(`+ ${key}: ${obj2[key]}`);
    }
    return null;
  });
  const resultStr = `{\n  ${resultArr.join('\n  ')}\n}`;
  console.log(resultStr);
  return resultStr;
};

export default genDiff;
