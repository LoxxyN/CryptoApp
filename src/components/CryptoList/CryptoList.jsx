import { ChevronDown, ChevronUp } from 'lucide-react'
import { TableCell, TableRow } from '..'
export const CryptoList = ({ COINS_DATA }) => {
	return (
		<>
			{COINS_DATA.map(item => (
				<TableRow key={item.market_cap_rank}>
					<TableCell className='h-12'>
						<div className='flex items-center gap-x-3'>
							<span className='text-neutral-500'>{item.market_cap_rank}</span>
						</div>
					</TableCell>
					<TableCell className='h-12'>
						<div className='flex items-center gap-x-3'>
							<div>
								<img src={item.image} alt='icon' width={24} height={24} />
							</div>
							{item.name}
							<span className='text-sm text-neutral-500'>{item.symbol}</span>
						</div>
					</TableCell>
					<TableCell className='h-12'>
						<div>
							<span>{item.current_price}</span>$
						</div>
					</TableCell>
					<TableCell className='h-12'>
						<div>
							{item.price_change_percentage_1h_in_currency > 0 ? (
								<div className='text-green-500 flex items-center gap-x-1'>
									<ChevronUp />
									<span>{item.price_change_percentage_1h_in_currency}$</span>
								</div>
							) : (
								<div className='text-red-500 flex items-center gap-x-1'>
									<ChevronDown />
									<span>{item.price_change_percentage_1h_in_currency}$</span>
								</div>
							)}
						</div>
					</TableCell>
					<TableCell className='h-12'>
						<div>
							{item.price_change_percentage_24h_in_currency > 0 ? (
								<div className='text-green-500 flex items-center gap-x-1'>
									<ChevronUp />
									<span>{item.price_change_percentage_24h_in_currency}$</span>
								</div>
							) : (
								<div className='text-red-500 flex items-center gap-x-1'>
									<ChevronDown />
									<span>{item.price_change_percentage_24h_in_currency}$</span>
								</div>
							)}
						</div>
					</TableCell>
					<TableCell>
						<div>
							{item.price_change_percentage_7d_in_currency > 0 ? (
								<div className='text-green-500 flex items-center gap-x-1'>
									<ChevronUp />
									<span>{item.price_change_percentage_7d_in_currency}$</span>
								</div>
							) : (
								<div className='text-red-500 flex items-center gap-x-1'>
									<ChevronDown />
									<span>{item.price_change_percentage_7d_in_currency}$</span>
								</div>
							)}
						</div>
					</TableCell>
					<TableCell>
						<div>
							<span>{item.market_cap}$</span>
						</div>
					</TableCell>
				</TableRow>
			))}
		</>
	)
}
