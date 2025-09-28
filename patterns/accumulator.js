/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== "number") return NaN;

  if (n < 0) {
    return undefined;
  }
  if (n === 0 || n === 1) return 1;
  let results = 1;
  for (let i = 2; i <= n; i++) {
    results = results * i;
  }
  return results;
  // TODO
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if (typeof n !== "number") return null;
  if (n <= 0) {
    return [];
  }
  if (n === 1) return [1];
  let results = [];
  for (let i = 1; i <= n; i++) {
    results.push(i);
  }
  return results;
  // TODO
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  for (const str of strings) {
    if (str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
  // TODO
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  if (attendance.length === 0) return 0;

  let counter = 0;
  for (const present of attendance) {
    if (present === true) {
      counter++;
    }
  }
  return counter;
  // TODO
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (typeof dna !== "string") {
    return null;
  }
  if (dna === "") return "";
  let result = "";
  for (const letter of dna) {
    if (letter === "A") result += "T";
    else if (letter === "T") result += "A";
    else if (letter === "C") result += "G";
    else if (letter === "G") result += "C";
  }
  return result;
  // TODO
}
