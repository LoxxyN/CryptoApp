import { ConverterInput, Loader, SwapConvertButton } from '@/components'
import {
	CONVERTER_URL,
	CRYPTO_API_KEY,
	FIAT_ARRAY,
	OPTIONS,
} from '@constants/constants'
import { useFetch } from '@hooks/useFetch'
import { useConverterStore } from '@store/index'
import { getCryptoData, getToAmount, isFiatCurrency } from '@utils/index'
import { useMemo } from 'react'
import { CRYPTO_CURRENCY } from './CryptoCurrency.data'
import { FIAT_CURRENCY } from './FiatCurrency.data'

const Converter = () => {
	const {
		fromAmount,
		fromCurrency,
		toCurrency,
		setFromAmount,
		setFromCurrency,
		setToCurrency,
	} = useConverterStore()
	const { data, isLoading } = useFetch(CONVERTER_URL, OPTIONS(CRYPTO_API_KEY))
	const rates = useMemo(() => (data ? getCryptoData(data) : null), [data])
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
