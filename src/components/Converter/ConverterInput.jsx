import { CurrencySelect } from '../CurrencySelect/CurrencySelect'
import { NumberInput } from '../NumberInput/NumberInput'
import { CONVERT_ITEMS } from './ConverterItems.data'

export const ConverterInput = ({
	amount,
	onAmountChange,
	currency,
	onCurrencyChange,
	dir,
	readOnly,
}) => {
	return (
		<div className='input-container flex bg-neutral-900 h-16 rounded-2xl w-72 justify-between z-[100]'>
			<NumberInput
				value={amount === '' ? 0 : amount}
				onChange={onAmountChange}
				id={`convert${dir}`}
				placeholder={dir}
				name={`convert${dir}`}
				readOnly={readOnly}
			/>

			<div className='flex justify-center items-center w-28'>
				<CurrencySelect
					value={currency}
					onValueChange={onCurrencyChange}
					items={CONVERT_ITEMS}
					placeholder={dir}
				/>
			</div>
		</div>
	)
}
