const flip = (d, a) => {
	return d === 'R' ? a.sort((a, b) => (a > b ? 1 : -1)) : a.sort((a, b) => (a < b ? 1 : -1));
};

flip('R', [3, 2, 1, 2]);
flip('L', [1, 4, 5, 3, 5]);
