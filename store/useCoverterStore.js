import { create } from 'zustand'

export const useConverterStore = create(set => ({
	fromAmount: 1,
	fromCurrency: 'USD',
	toCurrency: 'BTC',
	setFromAmount: setFromAmount => set({ setFromAmount }),
	setFromCurrency: setFromCurrency => set({ setFromCurrency }),
	setToCurrency: setToCurrency => set({ setToCurrency }),
}))
