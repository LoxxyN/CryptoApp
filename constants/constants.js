import { API_KEY, CRYPTO_URL } from '@config/env'

export const URL = CRYPTO_URL
export const OPTIONS = {
	method: 'GET',
	'Content-Type': 'application/json',
	Authorization: `Bearer ${API_KEY}`,
}

export const FIAT_ARRAY = ['RUB', 'EUR', 'USD']

const query_params = {
	converter: 'simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd',
	top100: 'coins/markets?vs_currency=usd&per_page=100',
}

export const TOP100_URL = URL + query_params.top100
export const CONVERTER_URL = URL + query_params.converter
