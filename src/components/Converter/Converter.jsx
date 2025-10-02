import { ConverterInput, Loader, SwapConvertButton } from '@/components'
import { CONVERTER_URL, FIAT_ARRAY } from '@constants/constants'
import { useFetch } from '@hooks/useFetch'
import { useConverterStore } from '@store/index'
import { getConverterData, getToAmount, isFiatCurrency } from '@utils/index'
import { useMemo, useState } from 'react'
import { CRYPTO_CURRENCY } from './CryptoCurrency.data'
import { FIAT_CURRENCY } from './FiatCurrency.data'

const Converter = () => {
	const [fromAmount, setFromAmount] = useState(1)
	const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
		useConverterStore()
	const { data, isLoading } = useFetch(CONVERTER_URL)
	const rates = useMemo(() => {
		return data ? getConverterData(data.data) : null
	}, [data])

	const toAmount = useMemo(
		() => getToAmount({ rates, fromAmount, fromCurrency, toCurrency }),
		[rates, fromAmount, fromCurrency, toCurrency]
	)

	const amount = isFiatCurrency(FIAT_ARRAY, toCurrency, toAmount)
	const onSwapValue = () => {
		setFromCurrency(toCurrency)
		setToCurrency(fromCurrency)
	}

	return (
		<div className='p-4'>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					<ConverterInput
						dir='From'
						amount={`${fromAmount}$`}
						onAmountChange={setFromAmount}
						itemsFiat={FIAT_CURRENCY}
						itemsCrypto={CRYPTO_CURRENCY}
						currency={fromCurrency}
						onCurrencyChange={setFromCurrency}
					/>

					<div className='flex justify-center items-center'>
						<SwapConvertButton onClick={onSwapValue} />
					</div>

					<ConverterInput
						dir='To'
						amount={`${amount}$`}
						currency={toCurrency}
						onCurrencyChange={setToCurrency}
						itemsFiat={FIAT_CURRENCY}
						itemsCrypto={CRYPTO_CURRENCY}
						readOnly={true}
					/>
				</div>
			)}
		</div>
	)
}

export default Converter
