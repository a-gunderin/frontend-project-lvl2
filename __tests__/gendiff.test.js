import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import parsing from '../src/core/parsers.js';
import genDiff from '../src/core/gendiff.js';
import stylish from '../src/core/stylish.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectedFlat = readFileSync(getFixturePath('expectedFlat.txt'), 'utf8');
const parsedJson1 = parsing(getFixturePath('file1.json'));
const parsedJson2 = parsing(getFixturePath('file2.json'));
test('Comparison of flat json files', () => {
  expect(stylish(genDiff(parsedJson1, parsedJson2))).toBe(expectedFlat);
});

const parsedYml1 = parsing(getFixturePath('file1.yml'));
const parsedYml2 = parsing(getFixturePath('file2.yml'));
test('Comparison of flat yml files', () => {
  expect(stylish(genDiff(parsedYml1, parsedYml2))).toBe(expectedFlat);
});

const expectedComplex = readFileSync(getFixturePath('expectedComplex.txt'), 'utf8');
const parsedComplexJson1 = parsing(getFixturePath('fileComplex1.json'));
const parsedComplexJson2 = parsing(getFixturePath('fileComplex2.json'));
test('Comparison of complex json files', () => {
  expect(stylish(genDiff(parsedComplexJson1, parsedComplexJson2))).toBe(expectedComplex);
});
