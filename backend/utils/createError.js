import { ERROR_TYPES } from './errorTypes.js'

export const createError = (
	type,
	message,
	retryAfter = null,
	details = null
) => {
	const error = new Error(message)
	error.type = type
	error.retryAfter = retryAfter
	error.details = details

	const statusCodes = {
		[ERROR_TYPES.VALIDATION]: 400,
		[ERROR_TYPES.NOT_FOUND]: 404,
		[ERROR_TYPES.RATE_LIMIT]: 429,
		[ERROR_TYPES.SERVER]: 500,
	}

	error.status = statusCodes[type] || 500
	return error
}
