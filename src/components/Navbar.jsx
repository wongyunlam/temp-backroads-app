import logo from '../images/logo.svg';
import { socialLinks } from '../data';
import { PageLinks, SocialLink } from './index';

export default function Navbar() {
	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<div className='nav-header'>
					<img
						src={logo}
						className='nav-logo'
						alt='backroads'
					/>
					<button
						type='button'
						className='nav-toggle'
						id='nav-toggle'
					>
						<i className='fas fa-bars'></i>
					</button>
				</div>
				<ul
					className='nav-links'
					id='nav-links'
				>
					<PageLinks
						parentClass='nav-links'
						itemClass='nav-link'
					/>
				</ul>

				<ul className='nav-icons'>
					{socialLinks.map((link) => {
						return (
							<SocialLink
								key={link.id}
								link={link}
								itemClass='nav-icon'
							/>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}
