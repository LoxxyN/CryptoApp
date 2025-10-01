import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import router from './routes/index.js'
import { cryptoApiService } from './service/cryptoApiService.js'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5172

app.use(
	cors({
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type', 'Authorization'],
	})
)
app.use(express.json())

app.get('/api/top100', async (req, res) => {
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

app.get('/api/crypto', async (req, res) => {
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

app.use('/', router)

app.listen(PORT, () => {
	console.log(`["INFO"]: Server is running on port ${PORT}`)
})
