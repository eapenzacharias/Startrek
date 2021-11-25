import { CountComments } from '../scripts/popUp.js';

describe('Test CountComments to return number of objects in the array', () => {
  test('Test the comment counter with array of 7', () => {
    const testArray = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
    expect(CountComments(testArray)).toEqual(7);
  });
  test('Test the comment counter with array of 2', () => {
    const testArray = [{ id: 0 }, { id: 1 }];
    expect(CountComments(testArray)).toEqual(2);
  });
  test('Test the counter with an empty array', () => {
    const testArray = [];
    expect(CountComments(testArray)).toEqual(0);
  });
  test('Test the counter with array of 1', () => {
    const testArray = [{ id: 0 }];
    expect(CountComments(testArray)).toEqual(1);
  });
});