import { CurrencySelect, NumberInput } from '@/components/index'

export const ConverterInput = ({
	amount,
	onAmountChange,
	currency,
	onCurrencyChange,
	itemsCrypto,
	itemsFiat,
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
					itemsFiat={itemsFiat}
					itemsCrypto={itemsCrypto}
					placeholder={dir}
				/>
			</div>
		</div>
	)
}
