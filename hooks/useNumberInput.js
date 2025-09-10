import { useCallback } from 'react'

export const useNumberInput = () => {
	return useCallback(value => {
		if (value === '') return ''

		value = value.replace(/,/g, '.')

		const isValid = /^-?\d*\.?\d*$/.test(value)
		if (!isValid) return null

		if (value.startsWith('0') && value.length > 1 && !value.startsWith('0.')) {
			value = value.replace(/^0+/, '')
		}

		return value
	}, [])
}
