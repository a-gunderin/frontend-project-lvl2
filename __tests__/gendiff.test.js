import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/utils/gendiff.js';
import parsing from '../src/utils/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectedFlat = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
const parsedJson1 = parsing(getFixturePath('file1.json'));
const parsedJson2 = parsing(getFixturePath('file2.json'));
test('Comparison of flat json files', () => {
  expect(genDiff(parsedJson1, parsedJson2)).toBe(expectedFlat);
});

const parsedYml1 = parsing(getFixturePath('file1.yml'));
const parsedYml2 = parsing(getFixturePath('file2.yml'));
test('Comparison of flat yml files', () => {
  expect(genDiff(parsedYml1, parsedYml2)).toBe(expectedFlat);
});
