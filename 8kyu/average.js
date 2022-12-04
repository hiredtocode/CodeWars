function findAverage(array) {
	// your code here
	return array.reduce((previous, current) => previous + current, 0) / array.length;
}
findAverage([1, 1, 1]);
findAverage([1, 2, 3]);
findAverage([1, 2, 3, 4]);
