import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { ConvertItem } from './ConvertItem'
import { CONVERT_ITEMS } from './ConvertItems.data'

export const ConvertInput = ({
	dir,
	amount,
	onAmountChange,
	currency,
	onCurrencyChange,
}) => {
	return (
		<div className='input-container flex bg-neutral-900 h-16 rounded-2xl w-72 justify-between z-[100]'>
			<input
				className='pl-2.5 w-40'
				value={amount}
				onChange={e => onAmountChange(e.target.value)}
				placeholder={dir}
				name={`convert${dir}`}
				id={`convert${dir}`}
				type='text'
				inputMode='numeric'
				pattern='[0-9]*'
			/>
			<div className='flex justify-center items-center w-28'>
				<Select value={currency} onValueChange={onCurrencyChange}>
					<SelectTrigger className='w-24'>
						<SelectValue placeholder={dir} />
					</SelectTrigger>
					<SelectContent>
						{CONVERT_ITEMS.map(item => (
							<ConvertItem
								key={item.id}
								value={item.value}
								icon={item.icon}
								name={item.name}
							/>
						))}
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}
