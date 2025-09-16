import { ENV } from '@config/env'
export const OPTIONS = API_KEY => {
	return {
		method: 'GET',
		'Content-Type': 'application/json',
		Authorization: `Bearer ${API_KEY}`,
	}
}

export const CRYPTO_API_KEY = ENV.COINGECKO_API_KEY
export const FIAT_API_KEY = ENV.FXRATES_API_KEY

export const FIAT_ARRAY = ['RUB', 'EUR', 'USD']

const QUERY_PARAMS = {
	converter: 'simple/price?vs_currencies=usd&ids=btc%2Csol%2Ceth',
	top100: 'coins/markets?vs_currency=usd&per_page=100',
	fiat: 'latest?base=USD&currencies=RUB,EUR&places=3',
}

export const TOP100_URL = ENV.BASE_CRYPTO_URL + QUERY_PARAMS.top100
export const CONVERTER_URL = ENV.BASE_CRYPTO_URL + QUERY_PARAMS.converter
export const FIAT_URL = ENV.BASE_FIAT_URL + QUERY_PARAMS.fiat
