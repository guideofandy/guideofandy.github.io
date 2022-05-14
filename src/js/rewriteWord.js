function rewriteWord(words, name, defaultValue = " ", WAIT_TIME = 1000) {
	const NAME = words[0];
	const NICKNAME = words[1];
	const TIMING_WRITE = 140;
	let changeNameInterval = true;
	let directionName = true;
	let interval;

	name.innerHTML = defaultValue;

	const handleLetters = () => {
		if (name.innerHTML.length < defaultValue.length ) {
			directionName = !directionName;
			changeNameInterval = !changeNameInterval;
		}
		if (directionName) {
			addLetterOfName(changeNameInterval ? NAME : NICKNAME);
		} else {
			removeLetterOfName();
		}

		const CONDITION = changeNameInterval ? NAME : NICKNAME;

		if (CONDITION.length === name.innerHTML.length) {
			clearInterval(interval);
			setTimeout(() => {
				directionName = !directionName;
				interval = setInterval(handleLetters, TIMING_WRITE);
			}, WAIT_TIME);
		}
	};

	const removeLetterOfName = () => {
		if (name.innerHTML.length > 0) {
			name.innerHTML = name.innerHTML.slice(0, -1);
		}
	};

	const addLetterOfName = (text) => {
		name.innerHTML += text[name.innerHTML.length];
	};

	interval = setInterval(handleLetters, TIMING_WRITE);
}
