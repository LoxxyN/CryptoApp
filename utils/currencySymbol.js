const currencySymbols = {
	USD: '$',
	EUR: '€',
	RUB: '₽',
}

export const currencySymbol = (amount, fromCurrency) => {
	const symbol = currencySymbols[fromCurrency] || ''
	return `${amount}${symbol}`
}
