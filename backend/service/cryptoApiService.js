import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

class cryptoApiServiceClass {
	constructor() {
		this.coinGeckoBaseURL =
			process.env.BASE_CRYPTO_URL || 'https://api.coingecko.com/api/v3/'

		this.fxratesBaseURL =
			process.env.BASE_FIAT_URL || 'https://api.fxratesapi.com/'

		this.cryptoApiKey = process.env.COINGECKO_API_KEY
		this.fiatApiKey = process.env.FXRATES_API_KEY

		this.coinGeckoClient = axios.create({
			baseURL: this.coinGeckoBaseURL,
			timeout: 10000,
			headers: {
				Authorization: this.cryptoApiKey ? `Bearer ${this.cryptoApiKey}` : '',
				'Content-Type': 'application/json',
			},
		})

		this.fxratesClient = axios.create({
			baseURL: this.fxratesBaseURL,
			timeout: 10000,
			headers: {
				Authorization: this.fiatApiKey ? `Bearer ${this.fiatApiKey}` : '',
				'Content-Type': 'application/json',
			},
		})
	}

	async getFiatCurrencies() {
		try {
			const response = await this.fxratesClient.get('latest', {
				params: {
					base: 'usd',
					currencies: 'rub,eur',
					places: 3,
				},
			})

			return response.data.map(coin => ({
				base: coin.base,
				rates: { ...coin.rates },
			}))
		} catch (error) {
			console.error('❌ Ошибка при запросе фиатных валют:', error.message)
			throw new Error('Не удалось получить список фиатных валют')
		}
	}

	async getTop100Currencies() {
		try {
			const response = await this.coinGeckoClient.get('coins/markets', {
				params: {
					vs_currency: 'usd',
					per_page: 100,
					price_change_percentage: '1h,24h,7d',
				},
			})

			return response.data.map(coin => ({
				id: coin.id,
				symbol: coin.symbol,
				name: coin.name,
				image: coin.image,
				current_price: coin.current_price,
				market_cap: coin.market_cap,
				market_cap_rank: coin.market_cap_rank,
				low_24h: coin.low_24h,
				high_24h: coin.high_24h,
				price_change_24h: coin.price_change_24h,
				price_change_percentage_24h: coin.price_change_percentage_24h,
				market_cap_change_24h: coin.market_cap_change_24h,
				market_cap_change_percentage_24h: coin.market_cap_change_percentage_24h,
				last_updated: coin.last_updated,
			}))
		} catch (error) {
			console.error('❌ Ошибка при запросе топ-100 криптовалют:', error.message)
			throw new Error('Не удалось получить данные 100 криптовалют')
		}
	}

	async getCryptoCurrencies() {
		try {
			const response = await this.coinGeckoClient.get('simple/price', {
				params: {
					vs_currencies: 'usd',
					symbols: 'eth,btc,sol',
					precision: 8,
				},
			})

			return response.data.map(coin => ({
				btc_usd: coin['btc']['usd'],
				eth_usd: coin['eth']['usd'],
				sol_usd: coin['sol']['usd'],
			}))
		} catch (error) {
			console.error('❌ Ошибка при запросе криптовалют:', error.message)
			throw new Error('Не удалось получить данные криптовалют')
		}
	}
}

export const cryptoApiService = new cryptoApiServiceClass()
