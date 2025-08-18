import { CurrencyIcon } from '../CurrencyIcon/CurrencyIcon'
import { SelectItem } from '../Select/Select'

export const ConverterSelectItem = ({ value, icon, name }) => {
	return (
		<SelectItem value={value}>
			<CurrencyIcon icon={icon} />
			{name}
		</SelectItem>
	)
}
