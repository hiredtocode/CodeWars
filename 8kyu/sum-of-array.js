function positiveSum(arr) {
	let positive = arr
		.filter((item) => {
			return item > 0;
		})
		.reduce((previous, current) => {
			return previous + current;
		}, 0);
	return positive;
}

positiveSum([1, 2, 3, 4, 5]);
positiveSum([1, -2, 3, 4, 5]);
positiveSum([]);
positiveSum([-1, -2, -3, -4, -5]);
positiveSum([-1, 2, 3, 4, -5]);
