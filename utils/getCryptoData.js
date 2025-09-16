export const getCryptoData = data => {
	return {
		BTC: data?.btc?.usd,
		ETH: data?.eth?.usd,
		SOL: data?.sol?.usd,
	}
}
