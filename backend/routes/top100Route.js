import express from "express"
import cryptoApiService from "../service/cryptoApiService.js"
const router = express.Router()

const top100Route = router.get("/top100", async (req, res) => {
	try {
		const data = await cryptoApiService.getTop100Currencies()

		res.json({
			success: true,
			data: data,
		})
	} catch (error) {
		console.error('["ERROR"]: ОШИБКА В ЭНДПОИНТЕ /api/top100')
		res.status(500).json({
			status: 500,
			error: error.message,
		})
	}
})

export default top100Route
