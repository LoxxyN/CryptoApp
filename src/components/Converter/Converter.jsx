import { OPTIONS, URL } from '@constants/constants'
import { FIAT_ARRAY } from '@constants/constants.js'
import { useFetch } from '@hooks/useFetch'
import { convertCurrencies } from '@utils/convertCurrencies'
import { RATES } from '@utils/getRates'
import { isFiatCurrency } from '@utils/isFiatCurrency.js'
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

	const amount = isFiatCurrency(FIAT_ARRAY, toCurrency, toAmount)

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
				amount={amount}
				currency={toCurrency}
				onCurrencyChange={setToCurrency}
			/>
		</div>
	)
}
