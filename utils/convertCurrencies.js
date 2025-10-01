/*
amount - Сумма которую принимает
fromCurrency - валюта из которой конвертирует
toCurrency - валюта в которую конвертирует
rates - объект с курсами валют
*/

export const convertCurrencies = (amount, fromCurrency, toCurrency, rates) => {
	if (!rates?.[fromCurrency] || !rates?.[toCurrency]) return ''
	return amount * (rates[fromCurrency] / rates[toCurrency])
}
