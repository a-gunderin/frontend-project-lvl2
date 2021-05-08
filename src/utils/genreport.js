import _ from 'lodash';
import getFilesData from './getfilesdata.js';

const genReport = (filepath1, filepath2) => {
  const filesData = getFilesData(filepath1, filepath2);

  if (filesData) {
    const keys = Object.keys(filesData[0]).concat(Object.keys(filesData[1]));
    const sortedKeys = _.uniq(keys)
      .sort((a, b) => a.localeCompare(b));
    const result = [];
    sortedKeys.forEach((key) => {
      if (_.has(filesData[0], key) && _.has(filesData[1], key)) {
        if (filesData[0][key] === filesData[1][key]) {
          result.push(`  ${key}: ${filesData[0][key]}`);
        } else {
          result.push(`- ${key}: ${filesData[0][key]}`);
          result.push(`+ ${key}: ${filesData[1][key]}`);
        }
      } else if (_.has(filesData[0], key) && !_.has(filesData[1], key)) {
        result.push(`- ${key}: ${filesData[0][key]}`);
      } else if (!_.has(filesData[0], key) && _.has(filesData[1], key)) {
        result.push(`+ ${key}: ${filesData[1][key]}`);
      }
      return null;
    });
    console.log(`{\n  ${result.join('\n  ')}\n}`);
  }

  return null;
};

export default genReport;
