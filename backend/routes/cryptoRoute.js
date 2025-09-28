import express from "express"
import cryptoApiService from "../service/cryptoApiService.js"
const router = express.Router()

const cryptoRoute = router.get("/crypto", async (req, res) => {
	try {
		const data = await cryptoApiService.getCryptoCurrencies()

		res.json({
			success: true,
			data: data,
		})
	} catch (error) {
		console.error('["ERROR"]: ОШИБКА В ЭНДПОИНТЕ /api/crypto')
		res.status(500).json({
			status: 500,
			error: error.message,
		})
	}
})

export default cryptoRoute
