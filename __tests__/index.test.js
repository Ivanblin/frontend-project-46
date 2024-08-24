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
    expect(gendiff(fileOneFullPath, FileTwoFullPath, 'stylish')).toEqual(resultStylish.toString());
    expect(gendiff(fileOneFullPath, FileTwoFullPath, 'plain')).toEqual(resultPlain.toString());
    expect(gendiff(fileOneFullPath, FileTwoFullPath, 'json')).toEqual(resultJson.toString());
    expect(gendiff(fileOneFullPath, FileTwoFullPath)).toEqual(resultStylish.toString());
  });
});
