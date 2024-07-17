import fs from 'fs';
import gendiff from '../index.js';

let resultStylish;
let resultPlain;
let resultJson;

beforeAll(() => {
  resultStylish = fs.readFileSync('./__fixtures__/resultStylish');
  resultPlain = fs.readFileSync('./__fixtures__/resultPlain');
  resultJson = fs.readFileSync('./__fixtures__/resultJson');
});

describe('get different from two files', () => {
  test.each([
    ['ini'],
    ['yml'],
    ['json'],

  ])('files format - %p', (extension) => {
    const fileOneFullPath = `${process.cwd()}/__fixtures__/file1.${extension}`;
    const FileTwoFullPath = `${process.cwd()}/__fixtures__/file2.${extension}`;
    expect(gendiff(FileTwoFullPath, fileOneFullPath, 'stylish')).toEqual(resultStylish.toString());
    expect(gendiff(FileTwoFullPath, fileOneFullPath, 'plain')).toEqual(resultPlain.toString());
    expect(gendiff(FileTwoFullPath, fileOneFullPath, 'json')).toEqual(resultJson.toString());
  });
});
