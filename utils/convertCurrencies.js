import { FIAT_ARRAY } from '@constants/constants'
/*
amount - Сумма которую принимает
fromCurrency - валюта из которой конвертирует
toCurrency - валюта в которую конвертирует
rates - объект с курсами валют
*/

export const convertCurrencies = (amount, fromCurrency, toCurrency, rates) => {
	const fromRate = fromCurrency.toUpperCase()
	const toRate = toCurrency.toUpperCase()

	if (!rates?.[fromRate] || !rates?.[toRate]) return ''

	const normalize = code => {
		const rate = rates[code]
		if (FIAT_ARRAY.includes(code)) {
			if (rate === 0) return 0
			return 1 / rate
		}
		return rate
	}

	const from = normalize(fromRate)
	const to = normalize(toRate)

	if (!from || !to) return ''

	return amount * (from / to)
}
