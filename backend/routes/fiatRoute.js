import express from "express"
import cryptoApiService from "../service/cryptoApiService.js"
const router = express.Router()

const fiatRoute = router.get("/fiat", async (req, res) => {
	try {
		const data = await cryptoApiService.getFiatCurrencies()
		res.json({
			succes: true,
			data: data,
		})
	} catch (error) {
		console.error('["ERROR"]: ОШИБКА В ЭНДПОИНТЕ /api/fiat')
		res.status(500).json({
			status: 500,
			error: error.message,
		})
	}
})

export default fiatRoute
