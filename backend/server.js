import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { errorHandler } from './middleware/errorHandler.js'
import router from './routes/index.js'
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
app.use('/', router)

app.use(errorHandler)
app.listen(PORT, () => {
	console.log(`["INFO"]: Server is running on port ${PORT}`)
})
