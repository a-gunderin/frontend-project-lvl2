import getFilesData from './getfilesdata.js';
import genDiff from './gendiff.js';

const genReport = (filepath1, filepath2) => {
  const filesData = getFilesData(filepath1, filepath2);

  if (filesData) {
    return genDiff(filesData[0], filesData[1]);
  }
  return null;
};

export default genReport;
