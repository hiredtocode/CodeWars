function findAverage(array) {
	// your code here
	return array.reduce((previous, current) => previous + current, 0) / array.length;
}
findAverage([1, 1, 1]);
findAverage([1, 2, 3]);
findAverage([1, 2, 3, 4]);

function betterThanAverage(classPoints, yourPoints) {
	let average =
		classPoints.reduce((previous, current) => previous + current, 0) / classPoints.length;
	return average <= yourPoints ? true : false;
}

betterThanAverage([2, 3], 5);
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9);
betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50);
betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21);

console.log(':', betterThanAverage([2, 3], 5));
