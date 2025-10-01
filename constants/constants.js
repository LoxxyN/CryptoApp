import { ENV } from '@config/env'

export const FIAT_ARRAY = ['RUB', 'EUR', 'USD']
export const CRYPTO_API_KEY = ENV.COINGECKO_API_KEY
export const FIAT_API_KEY = ENV.FXRATES_API_KEY

export const TOP100_URL = ENV.BASE_CRYPTO_URL
export const CONVERTER_URL = ENV.BASE_CRYPTO_URL
export const FIAT_URL = ENV.BASE_FIAT_URL
