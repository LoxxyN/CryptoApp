import { create } from 'zustand'

export const useConverterStore = create(set => ({
	fromCurrency: 'USD',
	setFromCurrency: fromCurrency => set({ fromCurrency }),
	toCurrency: 'BTC',
	setToCurrency: toCurrency => set({ toCurrency }),
}))
