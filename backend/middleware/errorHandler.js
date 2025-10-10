import { ERROR_TYPES } from '../utils/index.js'

export const errorHandler = (err, res, req, next) => {
	console.error('Error Handler:', err.message)

	let statusCode = err.status
	let errorType = err.type
	let message = err.message
	let retryAfter = err.retryAfter

	if (err.status === 429 || err.response?.status === 429) {
		statusCode = 429
		errorType = ERROR_TYPES.RATE_LIMIT
		message = 'API rate limit exceeded'
		retryAfter = err.response?.headers?.['retryAfter'] || err.retryAfter || 60
	}

	const errorResponse = {
		code: statusCode,
		status: 'error',
		error: {
			type: errorType,
			message: message,
			...(retryAfter && { retryAfter: parseInt(retryAfter) }),
			...(err.details && { details: err.details }),
		},
		timestamp: new Date().toISOString(),
	}
	res.status(statusCode).json(errorResponse)
}
