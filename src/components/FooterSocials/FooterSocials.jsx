import { FaDiscord, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'

export const FooterSocials = () => {
	return (
		<ul className='flex gap-x-4 justify-evenly items-center'>
			<li>
				<a href='#'>
					<FaTelegram className='text-gray-500 hover:text-gray-400 transition ' />
				</a>
			</li>
			<li>
				<a href='#'>
					<FaDiscord className='text-gray-500 hover:text-gray-400 transition' />
				</a>
			</li>
			<li>
				<a href='#'>
					<FaLinkedin className='text-gray-500 hover:text-gray-400 transition' />
				</a>
			</li>
			<li>
				<a href='#'>
					<FaGithub className='text-gray-500 hover:text-gray-400 transition' />
				</a>
			</li>
		</ul>
	)
}
