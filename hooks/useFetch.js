import { useEffect, useState } from 'react'

export const useFetch = url => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const controller = new AbortController()
		const { signal } = controller

		const fetchData = async () => {
			try {
				const response = await fetch(url, { signal })
				if (!response.ok) {
					throw new Error(`HTTP Error! status: ${response.status}`)
				}

				const jsonData = await response.json()
				setData(jsonData)
				setError(null)
			} catch (err) {
				if (err.name !== 'AbortError') {
					setError(err)
				}
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()

		return () => controller.abort()
	}, [url])

	return { data, error, isLoading }
}
