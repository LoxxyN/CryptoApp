import { ArrowDownUp } from 'lucide-react'

export const SwapConvertButton = ({ onClick }) => {
	return (
		<button
			title='Convert value'
			type='button'
			className={
				'my-1.5 h-10 w-10 rounded-full bg-neutral-700 hover:bg-neutral-700 active:bg-neutral-800 z-[110] transition'
			}
			onClick={onClick}
		>
			<div className='flex justify-center items-center'>
				<ArrowDownUp />
			</div>
		</button>
	)
}
