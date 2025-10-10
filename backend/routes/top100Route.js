import express from 'express'
import cryptoApiService from '../service/cryptoApiService.js'

const router = express.Router()
const top100Route = router.get('/top100', async (req, res, next) => {
	try {
		const data = await cryptoApiService.getTop100Currencies()

		const response = {
			code: 200,
			status: 'success',
			data: data,
			timestamp: new Date().toISOString(),
		}
		res.json(response)
	} catch (error) {
		next(error)
	}
})

export default top100Route
