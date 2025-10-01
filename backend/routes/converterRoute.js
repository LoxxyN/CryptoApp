import express from 'express'
import cryptoApiService from '../service/cryptoApiService.js'
const router = express.Router()

const converterRoute = router.get('/converter', async (req, res) => {
	try {
		const cryptoData = await cryptoApiService.getCryptoCurrencies()
		const fiatData = await cryptoApiService.getFiatCurrencies()

		res.json({
			success: true,
			data: {
				crypto: { ...cryptoData },
				fiat: { ...fiatData },
			},
		})
	} catch (error) {
		console.error('["ERROR"]: ОШИБКА В ЭНДПОИНТЕ /api/converter')
		res.status(500).json({
			status: 500,
			error: error.message,
		})
	}
})

export default converterRoute
