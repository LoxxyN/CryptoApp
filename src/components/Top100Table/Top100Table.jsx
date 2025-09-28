import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from ".."
import { TABLE_HEADING } from "./tableInfo.data"
export const Top100Table = coinsData => {
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
				<TableRow>
					<TableCell></TableCell>
					<TableCell></TableCell>
					<TableCell></TableCell>
					<TableCell></TableCell>
					<TableCell></TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}
