const ENV = {
	COINGECKO_API_KEY: import.meta.env.VITE_COINGECKO_API_KEY,
	BASE_URL: import.meta.env.BASE_URL,
}

export const BASE_URL = ENV.BASE_URL
export const API_KEY = ENV.COINGECKO_API_KEY
