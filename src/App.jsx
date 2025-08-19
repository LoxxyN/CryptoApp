import { ConverterContainer, FooterContainer, HeaderContainer } from './layouts'

export const App = () => {
	return (
		<div className='flex flex-col justify-between h-screen'>
			<HeaderContainer />
			<ConverterContainer />
			<FooterContainer />
		</div>
	)
}
