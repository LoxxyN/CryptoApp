export const CurrencyBadge = () => {
	return (
		<div className='flex items-center gap-2'>
			<div></div>
			<span>{'BTC'}</span>
		</div>
	)
}

export const CurrencyIcon = ({ icon }) => {
	return (
		<div>
			<img
				src={`/icons/Сurrencies/${icon}.svg`}
				alt='icon'
				width={20}
				height={20}
			/>
		</div>
	)
}
