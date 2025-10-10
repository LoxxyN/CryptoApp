import express from 'express'
import cryptoApiService from '../service/cryptoApiService.js'

const router = express.Router()
const converterRoute = router.get('/converter', async (req, res, next) => {
	try {
		const [fiatData, cryptoData] = await Promise.all([
			cryptoApiService.getFiatCurrencies(),
			cryptoApiService.getCryptoCurrencies(),
		])
		const response = {
			code: 200,
			status: 'success',
			data: {
				fiat: { ...fiatData },
				crypto: { ...cryptoData },
			},
			timestamp: new Date().toISOString(),
		}
		res.json(response)
	} catch (error) {
		next(error)
	}
})

export default converterRoute
