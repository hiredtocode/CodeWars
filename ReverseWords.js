function reverseWords(str) {
	let split = str.split('').reverse().join('');

	console.log('split:', split);
}

reverseWords('The quick brown fox jumps over the lazy dog.');
