import { convertCurrencies } from '@utils/index'

export const getToAmount = ({
	rates,
	fromAmount,
	fromCurrency,
	toCurrency,
}) => {
	if (!rates || !fromAmount) return ''

	const amount = parseFloat(fromAmount)
	if (isNaN(amount)) return ''

	return convertCurrencies(amount, fromCurrency, toCurrency, rates)
}
