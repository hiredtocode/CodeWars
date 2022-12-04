// const chai = require('chai');
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe('Example tests', () => {
// 	it('Test 1', () => {
// 		assert.strictEqual(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'), '42 -9');
// 	});
// 	it('Test 2', () => {
// 		assert.strictEqual(highAndLow('1 2 3'), '3 1');
// 	});
// });

function highAndLow(numbers) {
	let array = numbers.split(' ');

	let max = Math.max(...array);
	let min = Math.min(...array);

	return `${max} ${min}`;
}

console.log(
	"🚀 ~ file: test.js:19 ~ highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')",
	highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')
);
