import { readFileSync } from 'fs';
import path from 'path';

const getFilesData = (filepath1, filepath2) => {
  const absolutePath1 = path.resolve(filepath1);
  const absolutePath2 = path.resolve(filepath2);

  try {
    const fileData1 = readFileSync(absolutePath1, 'utf8');
    const fileData2 = readFileSync(absolutePath2, 'utf8');
    return [JSON.parse(fileData1), JSON.parse(fileData2)];
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getFilesData;
