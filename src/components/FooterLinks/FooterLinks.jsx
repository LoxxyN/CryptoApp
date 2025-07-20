import { FooterLink } from './FooterLink.jsx'
import { FOOTER_LINKS } from './footerLinks.data.js'

export const FooterLinks = () => {
	return (
		<nav>
			<ul className='flex gap-x-8'>
				{FOOTER_LINKS.map(item => (
					<FooterLink key={item.id} link={item.link} name={item.name} />
				))}
			</ul>
		</nav>
	)
}
