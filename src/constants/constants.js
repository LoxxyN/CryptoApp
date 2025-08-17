const API_KEY = import.meta.env.VITE_API_KEY
export const URL =
	'https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&symbols=BTC%2CETH%2CSOL%2CUSDT%2CEURT%2CA7A5'
export const OPTIONS = {
	method: 'GET',
	'Content-Type': 'application/json',
	Authorization: `Bearer ${API_KEY}`,
}
