const textInputPattern = /[<>]/g;
const allowedPhonePattern = /[^0-9+()\s-]/g;
const phoneFieldSelector = '#phone-number';

const sanitizeText = (value) => value.replace(textInputPattern, '').replace(/\s{2,}/g, ' ').trimStart();
const sanitizePhone = (value) => value.replace(allowedPhonePattern, '');

const isPhoneInsertionAllowed = (value) => /^[0-9+()\s-]+$/.test(value);

const phoneField = document.querySelector(phoneFieldSelector);

if (phoneField instanceof HTMLInputElement) {
	phoneField.addEventListener('beforeinput', (event) => {
		if (typeof event.data === 'string' && event.data.length > 0 && !isPhoneInsertionAllowed(event.data)) {
			event.preventDefault();
		}
	});

	phoneField.addEventListener('keydown', (event) => {
		if (event.ctrlKey || event.metaKey || event.altKey) {
			return;
		}

		const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Home', 'End', 'Enter'];

		if (allowedKeys.includes(event.key)) {
			return;
		}

		if (!isPhoneInsertionAllowed(event.key)) {
			event.preventDefault();
		}
	});

	phoneField.addEventListener('paste', (event) => {
		event.preventDefault();
		const pastedValue = event.clipboardData?.getData('text') ?? '';
		const sanitizedValue = sanitizePhone(pastedValue);
		phoneField.setRangeText(sanitizedValue, phoneField.selectionStart ?? phoneField.value.length, phoneField.selectionEnd ?? phoneField.value.length, 'end');
		phoneField.dispatchEvent(new Event('input', { bubbles: true }));
	});
}

document.addEventListener('beforeinput', (event) => {
	const target = event.target;

	if (!(target instanceof HTMLInputElement) || target.dataset.sanitize !== 'phone') {
		return;
	}

	if (typeof event.data === 'string' && event.data.length > 0 && !isPhoneInsertionAllowed(event.data)) {
		event.preventDefault();
	}
});

document.addEventListener('input', (event) => {
	const target = event.target;

	if (!(target instanceof HTMLInputElement)) {
		return;
	}

	if (target.dataset.sanitize === 'phone') {
		target.value = sanitizePhone(target.value);
		return;
	}

	if (target.dataset.sanitize === 'text' || target.dataset.sanitize === 'email') {
		target.value = sanitizeText(target.value);
	}
});

document.addEventListener('submit', (event) => {
	const form = event.target;

	if (!(form instanceof HTMLFormElement)) {
		return;
	}

	const invalidField = Array.from(form.elements).find((element) => element instanceof HTMLInputElement && !element.checkValidity());

	if (invalidField instanceof HTMLInputElement) {
		event.preventDefault();
		invalidField.reportValidity();
	}
});
