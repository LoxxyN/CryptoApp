import { useNumberInput } from '@hooks/useNumberInput'

export const NumberInput = ({
	value,
	onChange,
	id,
	placeholder,
	name,
	readOnly,
}) => {
	const validateInput = useNumberInput()

	const handleChange = e => {
		const inputValue = e.target.value
		if (inputValue === '') {
			onChange('')
			return
		}

		const validatedValue = validateInput(inputValue)
		if (validatedValue !== null) {
			onChange(validatedValue)
		}
	}

	return (
		<input
			className='pl-2.5 w-40'
			value={value}
			onChange={handleChange}
			id={id}
			placeholder={placeholder}
			name={name}
			readOnly={readOnly}
			type='text'
			inputMode='decimal'
		/>
	)
}
