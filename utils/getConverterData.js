export const getConverterData = ({ data }) => {
	return {
		USD: 1,
		EUR: data?.fiat?.EUR,
		RUB: data?.fiat?.RUB,
		BTC: data?.crypto?.BTC,
		ETH: data?.crypto?.ETH,
		SOL: data?.crypto?.SOL,
	}
}
