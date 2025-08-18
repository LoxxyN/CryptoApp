export const RATES = data => ({
	RUB: data?.a7a5?.usd,
	USD: data?.usdt?.usd,
	EUR: data?.eurt?.usd,
	BTC: data?.btc?.usd,
	ETH: data?.eth?.usd,
	SOL: data?.sol?.usd,
})
