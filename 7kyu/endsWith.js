// const Test = require('@codewars/test-compat');

// describe('Tests', () => {
// 	it('test', () => {
// 		Test.assertEquals(solution('abcde', 'cde'), true);
// 		Test.assertEquals(solution('abcde', 'abc'), false);
// 	});
// });

function solution(str, ending) {
	let array1 = str.split('').reverse();
	let array2 = ending.split('').reverse();
	let length = array2.length;
	let match = array1.slice(0, length);

	return match.join() == array2.join() ? true : false;
}

console.log("🚀 ~ file: test.js:16 ~ solution('abcde', 'cde')", solution('abcde', 'bcde'));
// console.log("🚀 ~ file: test.js:18 ~ solution('abcde', 'abc')", solution('abcde', 'abc'));

// Best solution was

const solution = (str, ending) => str.endsWith(ending);
