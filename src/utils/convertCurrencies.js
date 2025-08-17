/*
amount - Сумма которую принимает
fromCurrency - валюта из которой конвертирует
toCurrency - валюта в которую конвертирует
rates - объект с курсами валют
*/

export const convertCurrencies = (amount, fromCurrency, toCurrency, rates) => {
	return amount * (rates[fromCurrency] / rates[toCurrency])
}
