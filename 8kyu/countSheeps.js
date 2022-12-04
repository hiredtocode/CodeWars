var countSheep = function (num) {
	let i = 1;
	let text = '';
	if (num <= 0) return '';
	while (i <= num) {
		text += `${i} sheep...`;
		i++;
	}
	return text;
};

// assert.strictEqual(countSheep(0), '');
// assert.strictEqual(countSheep(1), '1 sheep...');
// assert.strictEqual(countSheep(2), '1 sheep...2 sheep...');
// assert.strictEqual(countSheep(3), '1 sheep...2 sheep...3 sheep...');
