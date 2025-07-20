import { NAVBAR_LINKS } from './NavBarLinks.data.js'
import { NavLink } from './NavLink.jsx'

export const NavBar = () => {
	return (
		<nav>
			<ul className='flex gap-x-2'>
				{NAVBAR_LINKS.map(item => (
					<NavLink key={item.id} link={item.link} name={item.name} />
				))}
			</ul>
		</nav>
	)
}
