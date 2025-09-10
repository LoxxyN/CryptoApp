import { CurrencyIcon } from '../CurrencyIcon/CurrencyIcon'
import { SelectItem } from '../ShadSelect/ShadSelect'

export const CurrencySelectItem = ({ value, icon, name }) => {
	return (
		<SelectItem value={value}>
			<CurrencyIcon icon={icon} />
			{name}
		</SelectItem>
	)
}
