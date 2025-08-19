import { FaDiscord, FaGithub, FaTelegram } from 'react-icons/fa'

export const FooterSocials = () => {
	return (
		<ul className='flex gap-x-4 justify-evenly items-center'>
			<li>
				<a href='https://t.me/L0xxyN' target='_blank'>
					<FaTelegram className='text-gray-500 hover:text-gray-400 transition ' />
				</a>
			</li>
			<li>
				<a
					href='https://discordapp.com/users/860042883246325781'
					target='_blank'
				>
					<FaDiscord className='text-gray-500 hover:text-gray-400 transition' />
				</a>
			</li>
			<li>
				<a href='https://github.com/LoxxyN' target='_blank'>
					<FaGithub className='text-gray-500 hover:text-gray-400 transition' />
				</a>
			</li>
		</ul>
	)
}
