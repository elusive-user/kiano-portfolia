const inputs = document.querySelectorAll('.form__input')

inputs.forEach(input => {
	const wrapper = input.closest('.form__input-box')

	input.addEventListener('input', () => {
		wrapper.style.setProperty('--icon-opacity', input.value ? '0' : '1')
	})
})
