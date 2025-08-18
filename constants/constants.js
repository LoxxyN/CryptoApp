import { API_KEY, BASE_URL } from '@config/env'

export const URL = BASE_URL
export const OPTIONS = {
	method: 'GET',
	'Content-Type': 'application/json',
	Authorization: `Bearer ${API_KEY}`,
}
