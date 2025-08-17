export const Button = props => {
	return (
		<button
			className={
				'font-normal h-12 w-auto rounded-xl px-2 py-1 bg-green-400 hover:bg-green-500 active:bg-green-600 text-black'
			}
		>
			{props.text}
		</button>
	)
}
