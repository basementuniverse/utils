/// <reference types="typescript" />

/**
 * An interpolation function
 * @callback interpolationCallback
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value, should be in the interval [0, 1]
 * @return {number} The interpolated value in the interval [a, b]
 */
type interpolationCallback = (a: number, b: number, i: number) => number;

/**
 * A function for generating array values
 * @callback timesCallback
 * @param {number} i The array index
 * @return {*} The array value
 */
type timesCallback = (i: number) => any;

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
 * @param {interpolationCallback} [f=Math.lerp] The interpolation function to use
 * @return {number} An interpolated value in the interval [min(a), max(a)]
 */
declare function lerpArray(a: Array<number>, i: number, f?: interpolationCallback): number;

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
declare function permutation(n: number, r: number): number;

/**
 * Get the number of combinations of r elements from a set of n elements
 * @param {number} n
 * @param {number} r
 * @return {number} nCr
 */
declare function combination(n: number, r: number): number;

/**
 * Return a new array with length n by calling function f(i) on each element
 * @param {timesCallback} f
 * @param {number} n The size of the array
 * @return {Array<*>}
 */
declare function times(f: timesCallback, n: number): Array<any>;

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

export {
  floatEquals,
  clamp,
  frac,
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
  permutation,
  combination,
  times,
  range,
  zip,
  at,
  chunk,
  shuffle,
};
