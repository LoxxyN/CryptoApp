import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
} from '@/components/ShadSelect/ShadSelect'
import { CurrencySelectItem } from './CurrencySelectItem'

export const CurrencySelect = ({
	value,
	onValueChange,
	items,
	placeholder,
}) => {
	return (
		<Select value={value} onValueChange={onValueChange}>
			<SelectTrigger className='w-24'>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{items.map(item => (
					<CurrencySelectItem
						key={item.id}
						value={item.value}
						icon={item.icon}
						name={item.name}
					/>
				))}
			</SelectContent>
		</Select>
	)
}
