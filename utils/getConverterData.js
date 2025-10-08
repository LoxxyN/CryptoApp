export const getConverterData = ({ data }) => {
	if (!data) return {}

	return {
		...(data.crypto || {}),
		...(data.fiat || {}),
	}
}
