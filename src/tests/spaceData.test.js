import { itemCounter } from '../scripts/spaceData.js';

describe('Test itemCounter to return number of objects in the array', () => {
  test('Test the counter with array of 5', () => {
    const testArray = [{ Hello: 0 }, { Hello: 0 }, { Hello: 0 }, { Hello: 0 }, { Hello: 0 }];
    expect(itemCounter(testArray)).toEqual(5);
  });
  test('Test the counter with array of 2', () => {
    const testArray = [{ Hello: 0 }, { Hello: 0 }];
    expect(itemCounter(testArray)).toEqual(2);
  });
  test('Test the counter with an empty array', () => {
    const testArray = [];
    expect(itemCounter(testArray)).toEqual(0);
  });
  test('Test the counter with array of 1', () => {
    const testArray = [{ Hello: 0 }];
    expect(itemCounter(testArray)).toEqual(1);
  });
});