import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/utils/gendiff.js';
import getFilesData from '../src/utils/getfilesdata.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const filesData = getFilesData(getFixturePath('file1.json'), getFixturePath('file2.json'));
const expectedFlat = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
test('Comparison of flat json files', () => {
  expect(genDiff(filesData[0], filesData[1])).toBe(expectedFlat);
});
