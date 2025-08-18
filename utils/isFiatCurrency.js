export const isFiatCurrency = (fiatArray, toCurrency, toAmount) => {
	if (fiatArray.includes(toCurrency)) {
		return Number(toAmount).toFixed(3)
	} else {
		return Number(toAmount).toFixed(7)
	}
}
