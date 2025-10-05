import {
	CryptoList,
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from '..'
import { TABLE_HEADING } from './tableHeading.data'

export const Top100Table = ({ COINS_DATA }) => {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					{TABLE_HEADING.map(item => (
						<TableHead key={item.id}>{item.description}</TableHead>
					))}
				</TableRow>
			</TableHeader>
			<TableBody>
				<CryptoList COINS_DATA={COINS_DATA} />
			</TableBody>
		</Table>
	)
}
