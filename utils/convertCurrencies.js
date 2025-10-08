/*
amount - Сумма которую принимает
fromCurrency - валюта из которой конвертирует
toCurrency - валюта в которую конвертирует
rates - объект с курсами валют
*/

export const convertCurrencies = (amount, fromCurrency, toCurrency, rates) => {
	const to = toCurrency.toUpperCase()
	const from = fromCurrency.toUpperCase()

	if (!rates?.[from] || !rates?.[to]) return ''
	return amount * (rates[to] / rates[from])
}
