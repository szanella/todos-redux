import { arrayToEntities, entitiesToArray } from './store-helpers.functions';

describe('arrayToEntities', () => {
  it('should map an array to entities', () => {
    const array: { id: number, [key: string]: any }[] = [
      { id: 1, a: 'a1', b: 'b1'},
      { id: 2, a: 'a2', b: 'b2'},
      { id: 3, a: 'a3', b: 'b3'}
    ];

    const entities = {
      1: array[0],
      2: array[1],
      3: array[2]
    };

    const actualEntities = arrayToEntities(array);
    expect(actualEntities).toEqual(entities);
  });
});

describe('entitiesToArray', () => {
  it('should map entities to an array', () => {
    const array: { id: number, [key: string]: any }[] = [
      { id: 1, a: 'a1', b: 'b1'},
      { id: 2, a: 'a2', b: 'b2'},
      { id: 3, a: 'a3', b: 'b3'}
    ];

    const entities = {
      1: array[0],
      2: array[1],
      3: array[2]
    };

    const actualEntities = entitiesToArray(entities);
    expect(actualEntities).toEqual(array);
  });
});
