function lovefunc(flower1, flower2) {
	// moment of truth
	let result = (flower1 + flower2) % 2 === 0 ? false : true;
	return result;
}

lovefunc(1, 4);
lovefunc(2, 2);
lovefunc(0, 1);
lovefunc(0, 0);
