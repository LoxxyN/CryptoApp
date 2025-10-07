export const getConverterData = ({ data }) => {
	if (!data) return {}

	return {
		USD: 1,
		...(data.crypto || {}),
		...(data.fiat || {}),
	}
}
