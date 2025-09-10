import { CONVERTER_URL, FIAT_ARRAY, OPTIONS } from '@constants/constants'
import { useFetch } from '@hooks/useFetch'
import { convertCurrencies } from '@utils/convertCurrencies'
import { RATES } from '@utils/getRates'
import { isFiatCurrency } from '@utils/isFiatCurrency'
import { useMemo, useState } from 'react'
import { SwapConvertButton } from '../Button/SwapConvertButton'
import { ConverterInput } from './ConverterInput'

const Converter = () => {
	const [fromAmount, setFromAmount] = useState(1)
	const [fromCurrency, setFromCurrency] = useState('USD')
	const [toCurrency, setToCurrency] = useState('RUB')
	const { data } = useFetch(CONVERTER_URL, OPTIONS)
	const rates = useMemo(() => (data ? RATES(data) : null), [data])

	const toAmount = useMemo(() => {
		if (!rates || !fromAmount) return ''

		const amount = parseFloat(fromAmount)
		if (isNaN(amount)) return ''

		return convertCurrencies(amount, fromCurrency, toCurrency, rates)
	}, [fromAmount, fromCurrency, toCurrency, rates])

	const amount = isFiatCurrency(FIAT_ARRAY, toCurrency, toAmount)

	const onSwapValue = () => {
		setFromCurrency(toCurrency)
		setToCurrency(fromCurrency)
	}

	return (
		<div className='p-4'>
			<ConverterInput
				dir='From'
				amount={fromAmount}
				onAmountChange={setFromAmount}
				currency={fromCurrency}
				onCurrencyChange={setFromCurrency}
			/>

			<div className='flex justify-center items-center'>
				<SwapConvertButton onClick={onSwapValue} />
			</div>

			<ConverterInput
				dir='To'
				amount={amount}
				currency={toCurrency}
				onCurrencyChange={setToCurrency}
				readOnly={true}
			/>
		</div>
	)
}

export default Converter