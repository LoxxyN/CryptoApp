import { Loader, Top100Table } from '@/components'
import { TOP100_URL } from '@constants/constants'
import { useFetch } from '@hooks/useFetch'

export const TopTableContainer = () => {
	const { data, isLoading } = useFetch(
		TOP100_URL || 'http://localhost:5172/api/top100'
	)
	return (
		<div>
			{isLoading || !data ? <Loader /> : <Top100Table COINS_DATA={data.data} />}
		</div>
	)
}
