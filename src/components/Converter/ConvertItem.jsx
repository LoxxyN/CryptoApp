import { CurrencyIcon } from '@/components/CurrencyIcon/CurrencyIcon'
import { SelectItem } from '@/components/ui/select'

export const ConvertItem = ({ value, icon, name }) => {
	return (
		<SelectItem value={value}>
			<CurrencyIcon icon={icon} />
			{name}
		</SelectItem>
	)
}
