import { Convert } from '@/components/Converter/Convert'
import { Info, Share2, SlidersHorizontal } from 'lucide-react'
export const Converter = () => {
	return (
		<div className='bg-neutral-800 h-[30rem] w-80 my-12 rounded-2xl'>
			<div className='flex items-center justify-between bg-zinc-800 h-1/6 rounded-t-2xl p-4'>
				<p>Swap to:</p>
				<div className='flex gap-2'>
					<Info
						size={18}
						className='text-neutral-600 hover:text-neutral-500 focus-within:text-neutral-500 active:text-neutral-700 transition cursor-pointer'
					/>
					<Share2
						size={18}
						className='text-neutral-600 hover:text-neutral-500 focus-within:text-neutral-500 active:text-neutral-700 transition cursor-pointer'
					/>
					<SlidersHorizontal
						size={18}
						className='text-neutral-600 hover:text-neutral-500 focus-within:text-neutral-500 active:text-neutral-700 transition cursor-pointer'
					/>
				</div>
			</div>
			<div className='p-4'>
				<input
					type='text'
					placeholder='Example from BTC to USD'
					className='input-search bg-neutral-900 h-8 w-full placeholder:text-neutral-600 placeholder:text-sm rounded-md'
				/>
			</div>
			<Convert />
		</div>
	)
}
