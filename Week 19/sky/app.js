// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(A) {
//     let temp = 0;
//     for (let i = 0; i < A.length; i++) {
//         for (let j = 0; j < A.length; j++) {
//             if (A[i] < A[j]) {
//                 temp = A[j];
//                 A[j] = A[i];
//                 A[i] = temp;
//             }
//         }
//     }
//     // [1, 1, 2, 3, 4, 6]

//     let min = 1;
//     for (let j = 1; j < 100000; j++) {
//         if (!(A.includes(j))) {
//             min = j;
//             break;
//         }
//     }

//     return min;
// }

// This is a demo task.
// Write a function:
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


// check to see if the number is less that 1
// check to see if the number is above 100,000
// return the value and wheather or not it is within the range

const request = require("supertest");
const app = require(process.env.SERVER_PATH);
const NEW_USER_NAME = 'bob zoe';

describe("API Test", function () {
    this.timeout('60000');

    it("returns JSON with a list of users", function () {
        //You can uncomment this test to pass the obligatory test.
        //Keep in mind that this is not a correct solution and just an
        //example.

        return true;
    });

    // it("endpoint /new returns expected text", function () {
    //   return ...;
    // });

    // it("endpoint /nonexisting returns 404 status", function () {
    //   return ...;
    // });

    // it("root path returns redirects", function () {
    //   return ...;
    // });

    // it("adding new user to the list", function () {
    //   return ...;
    // });
});