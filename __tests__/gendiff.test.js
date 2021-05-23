import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectedFlat = readFileSync(getFixturePath('expectedFlat.txt'), 'utf8');
const pathToFile1 = getFixturePath('file1.json');
const pathToFile2 = getFixturePath('file2.json');
test('Comparison of flat json files', () => {
  expect(genDiff(pathToFile1, pathToFile2)).toBe(expectedFlat);
});

const pathToFile3 = getFixturePath('file1.yml');
const pathToFile4 = getFixturePath('file2.yml');
test('Comparison of flat yml files', () => {
  expect(genDiff(pathToFile3, pathToFile4)).toBe(expectedFlat);
});

const expectedComplex = readFileSync(getFixturePath('expectedComplex.txt'), 'utf8');
const pathToFile5 = getFixturePath('fileComplex1.json');
const pathToFile6 = getFixturePath('fileComplex2.json');
test('Comparison of complex json files', () => {
  expect(genDiff(pathToFile5, pathToFile6)).toBe(expectedComplex);
});

const expectedComplexPlain = readFileSync(getFixturePath('expectedComplexPlain.txt'), 'utf8');
test('Comparison of complex json files with PLAIN formatter', () => {
  expect(genDiff(pathToFile5, pathToFile6, 'plain')).toBe(expectedComplexPlain);
});
