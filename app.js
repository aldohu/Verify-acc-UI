const inputs = document.querySelectorAll('.number');

inputs.forEach((input, i) => {
	input.addEventListener('input', (e) => {
		const inputValue = input.value;
		const isNumber = /^\d$/.test(inputValue); // Check if the input value is a number

		if (isNumber) {
			if (inputValue.length === 1) {
				if (i < inputs.length - 1) {
					inputs[i + 1].focus();
				}
			} else if (inputValue.length > 1) {
				if (i < inputs.length - 1) {
					input.value = inputValue.charAt(0); // Allow only the first digit
					inputs[i + 1].focus();
				} else {
					input.value = input.value.substring(0, 1); // Allow only the first digit
				}
			}
		} else if (inputValue === '' && i > 0) {
			inputs[i - 1].focus();
		}
	});
});
