import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

class cryptoApiService {
	constructor() {
		this.coinGeckoBaseURL =
			process.env.BASE_CRYPTO_URL || "https://api.coingecko.com/api/v3/"

		this.fxratesBaseURL =
			process.env.BASE_FIAT_URL || "https://api.fxratesapi.com/"

		this.cryptoApiKey = process.env.COINGECKO_API_KEY
		this.fiatApiKey = process.env.FXRATES_API_KEY

		this.coinGeckoClient = axios.create({
			baseURL: this.coinGeckoBaseURL,
			timeout: 10000,
			headers: {
				Authorization: this.cryptoApiKey ? `Bearer ${this.cryptoApiKey}` : "",
				"Content-Type": "application/json",
			},
		})

		this.fxratesClient = axios.create({
			baseURL: this.fxratesBaseURL,
			timeout: 10000,
			headers: {
				Authorization: this.fiatApiKey ? `Bearer ${this.fiatApiKey}` : "",
				"Content-Type": "application/json",
			},
		})
	}

	async getFiatCurrencies() {
		try {
			const response = await this.fxratesClient.get("latest?", {
				params: {
					base: "usd",
					currencies: "rub,eur",
					places: 3,
				},
			})

			return [
				{
					currency: "RUB",
					usd_price: response.data.rates.RUB,
				},
				{
					currency: "EUR",
					usd_price: response.data.rates.EUR,
				},
			]
		} catch (error) {
			console.error("Ошибка при запросе фиатных валют:", error.message)
			throw new Error("Не удалось получить список фиатных валют")
		}
	}

	async getCryptoCurrencies() {
		try {
			const response = await this.coinGeckoClient.get("simple/price", {
				params: {
					vs_currencies: "usd",
					ids: "bitcoin,ethereum,solana",
					precision: 8,
				},
			})

			return {
				BTC: response.data.bitcoin.usd,
				SOL: response.data.solana.usd,
				ETH: response.data.ethereum.usd,
			}
		} catch (error) {
			console.error("Ошибка при запросе криптовалют:", error.message)
			throw new Error("Не удалось получить данные криптовалют")
		}
	}

	async getTop100Currencies() {
		try {
			const response = await this.coinGeckoClient.get("coins/markets", {
				params: {
					vs_currency: "usd",
					page: 1,
					per_page: 100,
					precision: 8,
					price_change_percentage: "1h,24h,7d,14d",
				},
			})

			return response.data.map(coin => ({
				id: coin.id,
				symbol: coin.symbol,
				image: coin.image,
				market_cap_rank: coin.market_cap_rank,
				current_price: coin.current_price,
				market_cap: coin.market_cap,
				market_cap_change_24h: coin.market_cap_change_24h,
				price_change_percentage_24h: coin.price_change_percentage_24h,
				price_change_percentage_1h_in_currency:
					coin.price_change_percentage_1h_in_currency,
				price_change_percentage_24h_in_currency:
					coin.price_change_percentage_24h_in_currency,
				price_change_percentage_7d_in_currency:
					coin.price_change_percentage_7d_in_currency,
			}))
		} catch (error) {
			console.error("Ошибка при запросе топ-100 криптовалют:", error.message)
			throw new Error("Не удалось получить данные 100 криптовалют")
		}
	}
}

export default cryptoApiService = new cryptoApiService()
