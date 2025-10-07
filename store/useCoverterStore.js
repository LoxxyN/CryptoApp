import { create } from 'zustand'

export const useConverterStore = create(set => ({
	fromAmount: 1,
	fromCurrency: 'USD',
	toCurrency: 'BTC',
	setFromAmount: fromAmount => set({ fromAmount }),
	setFromCurrency: fromCurrency => set({ fromCurrency }),
	setToCurrency: toCurrency => set({ toCurrency }),
}))
