import { FooterLinks, FooterSocials } from '@/components'

export const FooterContainer = () => {
	return (
		<div className='flex justify-between h-16 items-center px-14 bg-neutral-800'>
			<h3 className='flex text-gray-500'>2025 © TRADERLY LLC</h3>
			<FooterLinks />
			<FooterSocials />
		</div>
	)
}
