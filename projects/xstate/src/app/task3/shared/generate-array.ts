import * as faker from 'faker';

export function generateArray(config: {
  count: number,
  min: number,
  max: number
}) {
  return new Array(config.count).fill(1).map(() => faker.random.number({
    max: config.max,
    min: config.min
  }));
}
