import { NavLink } from 'react-router'
import { NavigationMenuItem, NavigationMenuLink } from '../index'

export const NavigationLink = ({ link, name }) => {
	return (
		<NavigationMenuItem>
			<NavigationMenuLink asChild>
				<NavLink to={link}>{name}</NavLink>
			</NavigationMenuLink>
		</NavigationMenuItem>
	)
}
