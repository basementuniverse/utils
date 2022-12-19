const utils = require('../utils.js');

QUnit.module('Utils tests');

QUnit.test('Generate an array', assert => {
  assert.deepEqual(utils.times(i => i, 3), [0, 1, 2]);
});

QUnit.test('Create an array of integers', assert => {
  assert.deepEqual(utils.range(3), [0, 1, 2]);
});

QUnit.test('Zip arrays together', assert => {
  assert.deepEqual(utils.zip(['a', 'b', 'c'], [1, 2, 3]), [
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ]);
});

QUnit.test('Array value at wrapped index', assert => {
  const a = [1, 2, 3];
  assert.equal(utils.at(a, 0), 1);
  assert.equal(utils.at(a, 1), 2);
  assert.equal(utils.at(a, 2), 3);
  assert.equal(utils.at(a, -1), 3);
  assert.equal(utils.at(a, -2), 2);
  assert.equal(utils.at(a, -3), 1);
  assert.equal(utils.at(a, -4), 3);
  assert.equal(utils.at(a, 3), 1);
  assert.equal(utils.at(a, 4), 2);
});

QUnit.test('Chop an array into chunks', assert => {
  const a = utils.range(12);
  assert.deepEqual(utils.chunk(a, 3), [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11]
  ]);
  assert.deepEqual(utils.chunk(a, 4), [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
  ]);
  assert.deepEqual(utils.chunk(a, 5), [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11]
  ]);
});

QUnit.test('Shuffle an array', assert => {
  const a = utils.shuffle(utils.range(100));
  assert.notEqual(a[0], 0);
});

QUnit.test('Approximate value equality', assert => {
  assert.equal(utils.floatEquals(1 / 3, 0.3333333333333333), true);
});

QUnit.test('Clamp values', assert => {
  assert.equal(utils.clamp(-0.5), 0);
  assert.equal(utils.clamp(0.5), 0.5);
  assert.equal(utils.clamp(1.5), 1);
  assert.equal(utils.clamp(0.5, 1, 2), 1);
  assert.equal(utils.clamp(1.5, 1, 2), 1.5);
  assert.equal(utils.clamp(2.5, 1, 2), 2);
});

QUnit.test('Fractional part of a number', assert => {
  assert.equal(utils.frac(1.5), 0.5);
  assert.equal(utils.frac(2), 0);
});

QUnit.test('Linear interpolation', assert => {
  assert.equal(utils.lerp(1, 2, 0.5), 1.5);
});

QUnit.test('Opposite of linear interpolation', assert => {
  assert.equal(utils.unlerp(1, 2, 1.5), 0.5);
});

QUnit.test('Bilinear interpolation', assert => {
  assert.equal(utils.blerp(1, 2, 3, 4, 0.5, 0.5), 2.5);
});

QUnit.test('Remapping a number from one range to another', assert => {
  assert.equal(utils.remap(3, 2, 4, 0, 10), 5);
});

QUnit.test('Smooth interpolation', assert => {
  assert.equal(utils.floatEquals(utils.smoothstep(0, 1, 0.2), 0.10400000000000002), true);
  assert.equal(utils.floatEquals(utils.smoothstep(0, 1, 0.5), 0.5), true);
  assert.equal(utils.floatEquals(utils.smoothstep(0, 1, 0.8), 0.8960000000000001), true);
});

QUnit.test('Convert degrees to radians', assert => {
  assert.equal(utils.radians(180), Math.PI);
});

QUnit.test('Convert radians to degrees', assert => {
  assert.equal(utils.degrees(Math.PI), 180);
});

QUnit.test('Random number in interval', assert => {
  const r = utils.randomBetween(0, 1);
  assert.equal(r >= 0 && r < 1, true);
});

QUnit.test('Random integer in interval', assert => {
  const r = utils.randomIntBetween(1, 10);
  assert.equal(r >= 1 && r <= 10 && utils.frac(r) === 0, true);
});

QUnit.test('Get a normally distributed random number', assert => {
  const r = utils.times(i => utils.cltRandom(), 100);
  const b = (new Array(10)).fill(0);
  for (let i of r) {
    b[Math.floor(i * 10)]++;
  }
  assert.equal(b[4] > b[0] && b[5] > b[9], true);
});

QUnit.test('Get a normally distributed random integer', assert => {
  const r = utils.times(i => utils.cltRandomInt(0, 9), 100);
  const b = (new Array(10)).fill(0);
  for (let i of r) {
    b[i]++;
  }
  assert.equal(b[4] > b[0] && b[5] > b[9], true);
});

QUnit.test('Get a weighted random integer', assert => {
  const r = utils.times(i => utils.weightedRandom([1, 3, 1]), 100);
  const b = (new Array(3).fill(0));
  for (let i of r) {
    b[i]++;
  }
  assert.equal(b[1] > b[0] && b[1] > b[2], true);
});

QUnit.test('Interpolate an array value', assert => {
  const a = [1, 2, 3];
  assert.equal(utils.lerpArray(a, 0), 1);
  assert.equal(utils.lerpArray(a, 0.25), 1.5);
  assert.equal(utils.lerpArray(a, 0.5), 2);
  assert.equal(utils.lerpArray(a, 0.75), 2.5);
  assert.equal(utils.lerpArray(a, 1), 3);
});

QUnit.test('Dot product of a vector', assert => {
  const a = [2, 3, 4];
  const b = [5, 6, 7];
  assert.equal(utils.dot(a, b), 56);
});

QUnit.test('Factorial of a number', assert => {
  const factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800];
  for (let i = 0; i < factorials.length; i++) {
    assert.equal(utils.factorial(i), factorials[i]);
  }
});

QUnit.test('Combinations', assert => {
  assert.equal(utils.combination(3, 1), 3);
  assert.equal(utils.combination(3, 3), 1);
  assert.equal(utils.combination(10, 3), 120);
});

QUnit.test('Permutations', assert => {
  assert.equal(utils.permutation(3, 1), 3);
  assert.equal(utils.permutation(3, 3), 6);
  assert.equal(utils.permutation(10, 3), 720);
});
