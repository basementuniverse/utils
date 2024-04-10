const utils = require('../utils.js');

QUnit.module('Utils tests');

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

QUnit.test('Round a number to a given precision', assert => {
  assert.equal(utils.round(1.23456789), 1);
  assert.equal(utils.round(1.23456789, 2), 1.23);
  assert.equal(utils.round(1.23456789, 3), 1.235);
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

QUnit.test('Count permutations', assert => {
  assert.equal(utils.npr(3, 1), 3);
  assert.equal(utils.npr(3, 3), 6);
  assert.equal(utils.npr(10, 3), 720);
});

QUnit.test('Count combinations', assert => {
  assert.equal(utils.ncr(3, 1), 3);
  assert.equal(utils.ncr(3, 3), 1);
  assert.equal(utils.ncr(10, 3), 120);
});

QUnit.test('Generate combinations', assert => {
  assert.deepEqual(utils.combinations([1, 2, 3], 2), [
    [1, 2],
    [1, 3],
    [2, 3]
  ]);
});

QUnit.test('Generate a cartesian product of arrays', assert => {
  assert.deepEqual(utils.cartesian([1, 2], [3, 4]), [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4]
  ]);
});

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

QUnit.test('Get the last element of an array', assert => {
  assert.equal(utils.peek([1, 2, 3]), 3);
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

QUnit.test('Flatten an object', assert => {
  const o = {
    a: {
      b: {
        c: 1
      }
    }
  };
  assert.deepEqual(utils.flat(o), {
    'a.b.c': 1
  });
});

QUnit.test('Unflatten an object', assert => {
  const o = {
    'a.b.c': 1
  };
  assert.deepEqual(utils.unflat(o), {
    a: {
      b: {
        c: 1
      }
    }
  });
});

QUnit.test('Split an array based on a predicate', assert => {
  const a = [1, 2, 3, 4, 5];
  assert.deepEqual(utils.split(a, x => x === 3), [
    [1, 2],
    [3, 4, 5]
  ]);
});

QUnit.test('Pluck keys from an object', assert => {
  const o = {
    a: 1,
    b: 2,
    c: 3
  };
  assert.deepEqual(utils.pluck(o, 'a', 'c'), {
    a: 1,
    c: 3
  });
});

QUnit.test('Exclude keys from an object', assert => {
  const o = {
    a: 1,
    b: 2,
    c: 3
  };
  assert.deepEqual(utils.exclude(o, 'a', 'c'), {
    b: 2
  });
});

QUnit.test('Deep-merge 1', assert => {
  const a = 1;
  const b = 2;

  assert.deepEqual(utils.merge(a, b), [1, 2]);
});

QUnit.test('Deep-merge 2', assert => {
  const a = [1, 2];
  const b = 3;

  assert.deepEqual(utils.merge(a, b), [1, 2, 3]);
});

QUnit.test('Deep-merge 3', assert => {
  const a = 1;
  const b = [2, 3];

  assert.deepEqual(utils.merge(a, b), [1, 2, 3]);
});

QUnit.test('Deep-merge 4', assert => {
  const a = [1, 2];
  const b = [3, 4];

  assert.deepEqual(utils.merge(a, b), [1, 2, 3, 4]);
});

QUnit.test('Deep-merge 5', assert => {
  const a = 1;
  const b = { a: 2 };

  assert.deepEqual(utils.merge(a, b), [1, { a: 2 }]);
});

QUnit.test('Deep-merge 6', assert => {
  const a = { a: 1 };
  const b = 2;

  assert.deepEqual(utils.merge(a, b), [{ a: 1 }, 2]);
});

QUnit.test('Deep-merge 7', assert => {
  const a = [1, 2];
  const b = { a: 3 };

  assert.deepEqual(utils.merge(a, b), [1, 2, { a: 3 }]);
});

QUnit.test('Deep-merge 8', assert => {
  const a = { a: 1 };
  const b = [2, 3];

  assert.deepEqual(utils.merge(a, b), [{ a: 1 }, 2, 3]);
});

QUnit.test('Deep-merge 9', assert => {
  const a = { a: 1 };
  const b = { a: 2 };

  assert.deepEqual(utils.merge(a, b), { a: 2 });
});

QUnit.test('Deep-merge 10', assert => {
  const a = { a: 1 };
  const b = { a: 2, b: 3 };

  assert.deepEqual(utils.merge(a, b), { a: 2, b: 3 });
});

QUnit.test('Deep-merge 11', assert => {
  const a = { a: { b: 1 } };
  const b = { a: { c: 2 } };

  assert.deepEqual(utils.merge(a, b), { a: { b: 1, c: 2 } });
});

QUnit.test('Deep-merge 12', assert => {
  const a = { a: { b: 1 } };
  const b = { a: 2 };

  assert.deepEqual(utils.merge(a, b), { a: 2 });
});

QUnit.test('Deep-merge 13', assert => {
  const a = { a: [1] };
  const b = { a: { b: 2 } };

  assert.deepEqual(utils.merge(a, b), { a: [1, { b: 2 }] });
});

QUnit.test('Deep-merge 14', assert => {
  const a = { a: { b: 1, c: [1] } };
  const b = { a: { c: [2], d: true } };

  assert.deepEqual(utils.merge(a, b), { a: { b: 1, c: [1, 2], d: true } });
});
