// import R from "./ramda.js";

import { empty } from "ramda";

/**
 * This file is an adaption of the Computing 1 exam into Javascript.
 * @namespace Exam_questions
 * @author Pietro Ferraro, adapted to Javascript by A. Freddie Page
 * @version 2021/22
 * @property {object} q1
 */
const Exam_questions = {
    "q1": {},
    "q2": {},
    "q3": {},
    "q4": {},
    "q5": {},
    "q6": {},
    "q7": {},
    "q8": {}
};

/**
 * Write a function to find the shortest word from a list of words.
 * @memberof! Exam_questions
 * @function
 * @param {string[]} word_list An array of words to find the shortest in.
 * @returns {string} The shortest word in the input array.
 * @example shortest_word(["hello", "cat", "ok", "12345"]) // "ok";
 */
Exam_questions.q1.shortest_word = function (word_array) {
    let shortest = word_array[0];
    for (let i = 0; i < word_array.length; i++) {
        if (word_array[i].length < shortest.length) {
            shortest = word_array[i];
        };
    };
    return shortest

    };

/**
 * Write a function to find the sum of all the numerical values in a list
 * that can contain an arbitrary number of arbitrary types
 * @memberof! Exam_questions
 * @function
 * @param {array} array_of_any_type An array containing numeric and non-numeric
 * values.
 * @returns {number} The sum of the numeric entries.
 * @example sum_of_numbers(["hello", "cat", 2, true, 17, undefined]) // 19;
 */
Exam_questions.q2.sum_of_numbers = function (array_of_any_type) {
    const sum = array_of_any_type.reduce( (sumSoFar, nextValue) => {
        if ( typeof nextValue === "number" && isFinite(nextValue) ) {
           return sumSoFar + nextValue;
        }
        //skip otherwise
        return sumSoFar;
     }, 0);
     return sum //sum starting from zero
};

/**
 * Write a function that finds the longest palindrome in an array of strings.
 * - if there is no palindrome in the input array,
 * the function will return `undefined`.
 * - if there are two or more palindromes of the same length,
 * return the first one in the list.
 * - Spaces should be stripped out from the the strings.
 * - Result is case sensitive.
 * - Punctuation characters are treated as any other (non-space) character.
 *
 * Note: A palindrome is a word, phrase, or sequence that reads
 * the same backward as forward.
 * @memberof! Exam_questions
 * @function
 * @param {string[]} string_array An array of potentially palindromic strings.
 * @returns {(string | undefined)} The longest palindrome,
 * or undefined if no palindromes provided.
 * @example longest_palindrome(["cat", "hello", "nun"]) // "nun"
 * @example longest_palindrome(["cat", "hello", "nun", "never odd or even"])
 *   // "never odd or even"
 */
Exam_questions.q3.longest_palindrome = function (string_array) {
    if (string_array.length === 0) {
        return undefined
    };
    let longest = ""
    string_array.forEach(function(a){
        const b = a.replace(/\s/g, "")
        const reverse = b.split("").reverse().join("")
        if (reverse === b && a.length > longest.length) {
            longest = a;
        }
    });
    return (
        longest.length > 0 ? longest : undefined
    )
};

/**
 * Write a function that, given two integer inputs a and b (with a < b),
 * returns a list of all the numbers between a and b (a and b included)
 * whose square root is an integer.
 * @memberof! Exam_questions
 * @function
 * @param {number} a The start of the range.
 * @param {number} b The end of the range.
 * @returns {number[]} An array of perfect squares.
 * @example perfect_squares(2, 16) // [4, 9, 16]
 */
Exam_questions.q4.perfect_squares = function (a, b) {
    let empty_array = []
    for (let i = a; i <= b; i++) {
        if (Math.sqrt(i) % 1 === 0){
            empty_array.push(i)
        }
    };
    return empty_array
};
/**
 * Write a function that, given a list of numbers and an integer
 * returns an object with two keys: "numbers" and "powers".
 *   - The "numbers" property is the input list of numbers,
 *   - The "powers" property is the n-th power of the numbers of the input list.
 * @memberof! Exam_questions
 * @function
 * @param {number[]} numbers
 * @param {number} exponent
 * @returns {object<array<number>>} Object containing numbers and power arrays.
 * @example power_object([1, 3, 5, 6], 2)
 *   // {"numbers": [1, 3, 5, 6], "powers": [1, 9, 25, 36]}
 */
Exam_questions.q5.power_object = function (numbers, exponent) {
    let emptyArray = numbers.map(function(element){
        return Math.pow(element,exponent)
    });
    return emptyArray
};

/**
 * Write a function that accepts two string as inputs.
 * The second string should be the same as the first
 * but with characters in a different order and have one extra character.
 * The function should return that extra character in this case.
 * and `undefined` for all other inputs.
 * @memberof! Exam_questions
 * @function
 * @param {string} short_string Any string.
 * @param {string} long_string A string with the same characters as short_string
 * in any order and with an additional character, or any other string.
 * @returns {(string | undefined)} the missing character or undefined.
 * @example missing_character("hello", "hellon") // "n"
 * @example missing_character("hello", "hellonn") // undefined
 */
Exam_questions.q6.missing_character = function (short_string, long_string) {
    if (long_string.length !== short_string.length + 1){
        return undefined
    }
    else {
        const map = {}
        for (let i = 0; i < long_string.length; i++){
            if (long_string[i] in map){
                map[long_string[i]] += 1
            }
            else {
                map[long_string[i]] = 1
            }
        }
        for (let j = 0; j < short_string.length; j++){
            if (short_string[j] in map){
                map[short_string[j]] -= 1
                if (map[short_string[j]] === 0){
                    delete map[short_string[j]]
                }
            }
        }
        if (Object.keys(map).length !== 1){
            return undefined
        }
        for(var i in map){
            return i
        }
    }
};

/**
 * Write a function that accepts two integers as an input.
 * The function will return a list of all the numbers n between a and b
 * (a and b included), such that every digit in n is even.
 * @memberof! Exam_questions
 * @function
 * @param a The start of the range.
 * @param b The end of the range.
 * @returns {number[]} A list of numbers with only even digits.
 * @example even_digits(2, 27) // [2, 4, 6 ... 20, 22, 24, 26]
 */
Exam_questions.q7.even_digits = function (a, b) {
    let emptyArray = []
    for (let i = a; i<= b; i++) {
        if (i % 2 === 0){
            emptyArray.push(i)
        }
    }
    return emptyArray
};

/**
 * Write a function with two inputs arguments 'name', 'age'.
 * The function should return the string,
 * ``Hello ${name}, is your age ${age}?``.
 * I've implemented this one.
 * @memberof! Exam_questions
 * @function
 * @param {string} [name = "Andrea"] The name of the person we are talking to.
 * @param {number} [age = 19] Our assumption of the person's age.
 * @returns {string} The constructed question.
 * @example age_question("Pietro", 32) // "Hello Pietro, is your age 32?"
 */
Exam_questions.q8.age_question = function (name = "Andrea", age = 19) {
    return `Hello ${name}, is your age ${age}?`;
};

export default Object.freeze(Exam_questions);
