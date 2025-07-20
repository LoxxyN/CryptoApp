export const NavLink = props => {
	return (
		<li>
			<a href={props.link}>{props.name}</a>
		</li>
	)
}
