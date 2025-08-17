import { Button, Logo, NavBar } from '@/components'

export const Header = () => {
	return (
		<div className='flex justify-between h-18 items-center px-14 bg-neutral-800'>
			<Logo />
			<NavBar />
			<Button text={'Buy crypto now!'} />
		</div>
	)
}
