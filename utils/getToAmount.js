import { convertCurrencies } from '@utils/index'

export const getToAmount = ({
	rates,
	fromAmount,
	fromCurrency,
	toCurrency,
}) => {
	if (!rates || !fromAmount) return ''

	const from = fromCurrency.toUpperCase()
	const to = toCurrency.toUpperCase()

	const amount = parseFloat(fromAmount)
	if (isNaN(amount)) return ''

	return convertCurrencies(amount, from, to, rates)
}
