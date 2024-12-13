/// <reference types="typescript" />

/**
 * Memoize a function
 * @param {Function} f The function to memoize
 * @returns {Function} A memoized version of the function
 */
declare function memoize(f: Function): Function;

/**
 * Check if two numbers are approximately equal
 * @param {number} a Number a
 * @param {number} b Number b
 * @param {number} [p=Number.EPSILON] The precision value
 * @return {boolean} True if numbers a and b are approximately equal
 */
declare function floatEquals(a: number, b: number, p?: number): boolean;

/**
 * Clamp a number between min and max
 * @param {number} a The number to clamp
 * @param {number} [min=0] The minimum value
 * @param {number} [max=1] The maximum value
 * @return {number} A clamped number
 */
declare function clamp(a: number, min?: number, max?: number): number;

/**
 * Get the fractional part of a number
 * @param {number} a The number from which to get the fractional part
 * @return {number} The fractional part of the number
 */
declare function frac(a: number): number;

/**
 * Round n to d decimal places
 * @param {number} n The number to round
 * @param {number} [d=0] The number of decimal places to round to
 * @return {number} A rounded number
 */
declare function round(n: number, d?: number): number;

/**
 * An interpolation function
 * @callback InterpolationFunction
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value, should be in the interval [0, 1]
 * @return {number} The interpolated value in the interval [a, b]
 */
type InterpolationFunction = (a: number, b: number, i: number) => number;

/**
 * Do a linear interpolation between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value, should be in the interval [0, 1]
 * @return {number} An interpolated value in the interval [a, b]
 */
declare function lerp(a: number, b: number, i: number): number;

/**
 * Get the position of i between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolated value in the interval [a, b]
 * @return {number} The position of i between a and b
 */
declare function unlerp(a: number, b: number, i: number): number;

/**
 * Do a bilinear interpolation
 * @param {number} c00 Top-left value
 * @param {number} c10 Top-right value
 * @param {number} c01 Bottom-left value
 * @param {number} c11 Bottom-right value
 * @param {number} ix Interpolation value along x
 * @param {number} iy Interpolation value along y
 * @return {number} A bilinear interpolated value
 */
declare function blerp(c00: number, c10: number, c01: number, c11: number, ix: number, iy: number): number;

/**
 * Re-map a number i from range a1...a2 to b1...b2
 * @param {number} i The number to re-map
 * @param {number} a1
 * @param {number} a2
 * @param {number} b1
 * @param {number} b2
 * @return {number}
 */
declare function remap(i: number, a1: number, a2: number, b1: number, b2: number): number;

/**
 * Do a smooth interpolation between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value
 * @return {number} An interpolated value in the interval [a, b]
 */
declare function smoothstep(a: number, b: number, i: number): number;

/**
 * Get an angle in radians
 * @param {number} degrees The angle in degrees
 * @return {number} The angle in radians
 */
declare function radians(degrees: number): number;

/**
 * Get an angle in degrees
 * @param {number} radians The angle in radians
 * @return {number} The angle in degrees
 */
declare function degrees(radians: number): number;

/**
 * Get a random float in the interval [min, max)
 * @param {number} min Inclusive min
 * @param {number} max Exclusive max
 * @return {number} A random float in the interval [min, max)
 */
declare function randomBetween(min: number, max: number): number;

/**
 * Get a random integer in the interval [min, max]
 * @param {number} min Inclusive min
 * @param {number} max Inclusive max
 * @return {number} A random integer in the interval [min, max]
 */
declare function randomIntBetween(min: number, max: number): number;

/**
 * Get a normally-distributed random number
 * @param {number} [mu=0.5] The mean value
 * @param {number} [sigma=0.5] The standard deviation
 * @param {number} [samples=2] The number of samples
 * @return {number} A normally-distributed random number
 */
declare function cltRandom(mu?: number, sigma?: number, samples?: number): number;

/**
 * Get a normally-distributed random integer in the interval [min, max]
 * @param {number} min Inclusive min
 * @param {number} max Inclusive max
 * @return {number} A normally-distributed random integer
 */
declare function cltRandomInt(min: number, max: number): number;

/**
 * Return a weighted random integer
 * @param {Array<number>} w An array of weights
 * @return {number} An index from w
 */
declare function weightedRandom(w: Array<number>): number;

/**
 * Return an interpolated value from an array
 * @param {Array<number>} a An array of values interpolate
 * @param {number} i A number in the interval [0, 1]
 * @param {InterpolationFunction} [f=Math.lerp] The interpolation function to use
 * @return {number} An interpolated value in the interval [min(a), max(a)]
 */
declare function lerpArray(a: Array<number>, i: number, f?: InterpolationFunction): number;

/**
 * Get the dot product of two vectors
 * @param {Array<number>} a Vector a
 * @param {Array<number>} b Vector b
 * @return {number} a ∙ b
 */
declare function dot(a: Array<number>, b: Array<number>): number;

/**
 * Get the factorial of a number
 * @param {number} a
 * @return {number} a!
 */
declare function factorial(a: number): number;

/**
 * Get the number of permutations of r elements from a set of n elements
 * @param {number} n
 * @param {number} r
 * @return {number} nPr
 */
declare function npr(n: number, r: number): number;

/**
 * Get the number of combinations of r elements from a set of n elements
 * @param {number} n
 * @param {number} r
 * @return {number} nCr
 */
declare function ncr(n: number, r: number): number;

/**
 * Generate all permutations of r elements from an array
 *
 * @example
 * ```js
 * permutations([1, 2, 3], 2);
 * ```
 *
 * Output:
 * ```json
 * [
 *   [1, 2],
 *   [1, 3],
 *   [2, 1],
 *   [2, 3],
 *   [3, 1],
 *   [3, 2]
 * ]
 * ```
 * @param {T[]} a
 * @param {number} r The number of elements to choose in each permutation
 * @return {T[][]} An array of permutation arrays
 */
declare function permutations<T>(a: T[], r: number): T[][];

/**
 * Generate all combinations of r elements from an array
 *
 * @example
 * ```js
 * combinations([1, 2, 3], 2);
 * ```
 *
 * Output:
 * ```json
 * [
 *   [1, 2],
 *   [1, 3],
 *   [2, 3]
 * ]
 * ```
 * @param {T[]} a
 * @param {number} r The number of elements to choose in each combination
 * @return {T[][]} An array of combination arrays
 */
declare function combinations<T>(a: T[], r: number): T[][];

/**
 * A cartesian product of arrays
 * @template T
 */
type MapCartesian<T extends any[][]> = {
  [P in keyof T]: T[P] extends Array<infer U> ? U : never;
};

/**
 * Get a cartesian product of arrays
 *
 * @example
 * ```ts
 * cartesian([1, 2, 3], ['a', 'b']);
 * ```
 *
 * Output:
 * ```json
 * [
 *   [1, "a"],
 *   [1, "b"],
 *   [2, "a"],
 *   [2, "b"],
 *   [3, "a"],
 *   [3, "b"]
 * ]
 * ```
 */
declare function cartesian<T extends any[][]>(...arr: T): MapCartesian<T>[];

/**
 * A function for generating array values
 * @callback TimesFunction
 * @param {number} i The array index
 * @return {*} The array value
 */
type TimesFunction = (i: number) => any;

/**
 * Return a new array with length n by calling function f(i) on each element
 * @param {TimesFunction} f
 * @param {number} n The size of the array
 * @return {Array<*>}
 */
declare function times(f: TimesFunction, n: number): Array<any>;

/**
 * Return an array containing numbers 0->(n - 1)
 * @param {number} n The size of the array
 * @return {Array<number>} An array of integers 0->(n - 1)
 */
declare function range(n: number): Array<number>;

/**
 * Zip 2 arrays together, i.e. ([1, 2, 3], [a, b, c]) => [[1, a], [2, b], [3, c]]
 * @param {Array<*>} a
 * @param {Array<*>} b
 * @return {Array<*>}
 */
declare function zip(a: Array<any>, b: Array<any>): Array<Array<any>>;

/**
 * Return array[i] with positive and negative wrapping
 * @param {Array<*>} a
 * @param {number} i The positively/negatively wrapped array index
 * @return {*} An element from the array
 */
declare function at(a: Array<any>, i: number): any;

/**
 * Return the last element of an array without removing it
 * @param {T[]} a
 * @return {T} The last element from the array
 */
declare function peek<T = any>(a: T[]): T | undefined;

/**
 * Return the index for a given position in an unrolled 2d array
 * @param {number} x The x position
 * @param {number} y The y position
 * @param {number} w The width of the 2d array
 * @returns {number} The index in the unrolled array
 */
declare function ind(x: number, y: number, w: number): number;

/**
 * Return the position for a given index in an unrolled 2d array
 * @param {number} i The index
 * @param {number} w The width of the 2d array
 * @returns {Array<number>} The position as a 2-tuple
 */
declare function pos(i: number, w: number): [number, number];

/**
 * Chop an array into chunks of size n
 * @param {Array<*>} a
 * @param {number} n The chunk size
 * @return {Array<Array<*>>} An array of array chunks
 */
declare function chunk(a: Array<any>, n: number): Array<Array<any>>;

/**
 * Randomly shuffle an array in-place
 * @param {Array<*>} a
 * @return {Array<*>} The shuffled array
 */
declare function shuffle(a: Array<any>): Array<any>;

/**
 * Flatten an object
 * @param {object} o
 * @param {string} concatenator The string to use for concatenating keys
 * @return {object} A flattened object
 */
declare function flat(o: object, concatenator?: string): object;

/**
 * Unflatten an object
 * @param {object} o
 * @param {string} concatenator The string to check for in concatenated keys
 * @return {object} An un-flattened object
 */
declare function unflat(o: object, concatenator?: string): object;

/**
 * A split predicate
 * @callback SplitPredicate
 * @param {any} value The current value
 * @return {boolean} True if the array should split at this index
 */
type SplitPredicate = (a: number, b: number, i: number) => number;

/**
 * Split an array into sub-arrays based on a predicate
 * @param {T[]} a
 * @param {SplitPredicate} predicate
 * @return {T[][]} An array of arrays
 */
declare function split<T>(a: T[], predicate: SplitPredicate): T[][];

/**
 * Pluck keys from an object
 * @param {object} o
 * @param  {...string} keys The keys to pluck from the object
 * @return {object} An object containing the plucked keys
 */
declare function pluck<T extends object, K extends keyof T>(
  o: T,
  ...keys: K[]
): Pick<T, K>;

/**
 * Exclude keys from an object
 * @param {object} o
 * @param  {...string} keys The keys to exclude from the object
 * @return {object} An object containing all keys except excluded keys
 */
declare function exclude<T extends object, K extends [...(keyof T)[]]>(
  o: T,
  ...keys: K
): {
  [K2 in Exclude<keyof T, K[number]>]: T[K2];
};

export {
  memoize,
  floatEquals,
  clamp,
  frac,
  round,
  lerp,
  unlerp,
  blerp,
  remap,
  smoothstep,
  radians,
  degrees,
  randomBetween,
  randomIntBetween,
  cltRandom,
  cltRandomInt,
  weightedRandom,
  lerpArray,
  dot,
  factorial,
  npr,
  ncr,
  permutations,
  combinations,
  cartesian,
  times,
  range,
  zip,
  at,
  peek,
  ind,
  pos,
  chunk,
  shuffle,
  flat,
  unflat,
  split,
  pluck,
  exclude,
};
