import { Outlet } from 'react-router'
import { FooterContainer, HeaderContainer } from '../index'

export const LayoutContainer = () => {
	return (
		<div className='flex flex-col justify-between h-screen'>
			<HeaderContainer />
			<Outlet />
			<FooterContainer />
		</div>
	)
}
