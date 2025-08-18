import { OPTIONS, URL } from '@constants/constants'
import { useFetch } from '@hooks/useFetch'
import { convertCurrencies } from '@utils/convertCurrencies'
import { RATES } from '@utils/getRates'
import { useMemo, useState } from 'react'
import { SwapConvertButton } from '../Button/SwapConvertButton'
import { ConvertInput } from './ConverterInput.jsx'

export const Converter = () => {
	const [fromAmount, setFromAmount] = useState(1)
	const [fromCurrency, setFromCurrency] = useState('USD')
	const [toCurrency, setToCurrency] = useState('RUB')
	const { data } = useFetch(URL, OPTIONS)
	const rates = useMemo(() => (data ? RATES(data) : null), [data])

	const toAmount = useMemo(() => {
		if (!rates || !fromAmount) return ''

		const amount = parseFloat(fromAmount)
		if (isNaN(amount)) return ''

		return convertCurrencies(amount, fromCurrency, toCurrency, rates)
	}, [fromAmount, fromCurrency, toCurrency, rates])

	return (
		<div className='p-4'>
			<ConvertInput
				dir='From'
				amount={fromAmount}
				onAmountChange={setFromAmount}
				currency={fromCurrency}
				onCurrencyChange={setFromCurrency}
			/>

			<div className='flex justify-center items-center'>
				<SwapConvertButton />
			</div>

			<ConvertInput
				dir='To'
				amount={toAmount}
				currency={toCurrency}
				onCurrencyChange={setToCurrency}
			/>
		</div>
	)
}
