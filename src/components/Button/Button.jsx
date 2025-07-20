import cn from 'clsx'

export const Button = props => {
	return (
		<button
			className={cn(
				'h-12 w-auto rounded-xl px-2 py-1 bg-green-400 hover:bg-green-500 active:bg-green-600 text-black font-medium'
			)}
		>
			{props.text}
		</button>
	)
}
