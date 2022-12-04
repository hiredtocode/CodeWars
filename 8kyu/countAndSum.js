// describe('Example tests', () => {
// 	it('Testing for fixed test 1', () => {
// 		let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// 		let actual = sumPositivesSumNegatives(testData);
// 		let expected = [10, -65];
// 		assert.deepEqual(actual, expected);
// 	});

// 	it('Testing for fixed test 2', () => {
// 		let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
// 		let actual = countPositivesSumNegatives(testData);
// 		let expected = [8, -50];
// 		assert.deepEqual(actual, expected);
// 	});
// });

function countPositivesSumNegatives(input) {
	if (input === null || input === [] || input === [0, 0] || input === [0]) {
		return [];
	} else {
		let count = input.filter((number) => {
			return number > 0;
		}).length;

		let sum = input
			.filter((number) => number < 0)
			.reduce((previous, current) => {
				return previous + current;
			}, 0);

		if (count === 0 && sum === 0) {
			return [];
		}
		console.log('count:', count);
		console.log('sum:', sum);
		return [count, sum];
	}
}

let input = [0];

console.log('countPositivesSumNegatives(input):', countPositivesSumNegatives(input));
