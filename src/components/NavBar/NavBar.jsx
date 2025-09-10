import { NavigationMenu } from '../index'
import { NAVBAR_LINKS } from './NavBarLinks.data'
import { NavigationLink } from './NavigationLink'

export const NavBar = () => {
	return (
		<NavigationMenu>
			<ul className='flex gap-x-2'>
				{NAVBAR_LINKS.map(item => (
					<NavigationLink key={item.id} link={item.link} name={item.name} />
				))}
			</ul>
		</NavigationMenu>
	)
}
