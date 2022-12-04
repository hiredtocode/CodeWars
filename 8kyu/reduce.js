// const chai = require('chai');
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe('Basic tests', () => {
// 	it('Testing for fixed tests', () => {
// 		assert.strictEqual(grow([1, 2, 3]), 6);
// 		assert.strictEqual(grow([4, 1, 1, 1, 4]), 16);
// 		assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64);
// 	});
// });

function grow(x) {
	return x.reduce((previous, current) => {
		return previous * current;
	}, 1);
}

grow([4, 1, 1, 1, 4]);
console.log('🚀 ~ file: test.js:22 ~ grow([4, 1, 1, 1, 4])', grow([4, 1, 1, 1, 4]));
console.log('🚀 ~ file: test.js:19 ~ grow([2, 2, 2, 2, 2, 2])', grow([2, 2, 2, 2, 2, 2]));
