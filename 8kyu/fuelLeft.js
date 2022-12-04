// const assert = require('chai').assert;

// describe('zeroFill', function () {
// 	it('Sample Tests', function () {
// 		assert.equal(zeroFuel(50, 25, 2), true);
// 		assert.equal(zeroFuel(100, 50, 1), false);
// 	});
// });

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	return fuelLeft * mpg >= distanceToPump ? true : false;
};

console.log('🚀 ~ file: test.js:15 ~ zeroFuel(100, 50, 1)', zeroFuel(100, 50, 1));
console.log('🚀 ~ file: test.js:18 ~ zeroFuel(50, 25, 2)', zeroFuel(50, 25, 2));
