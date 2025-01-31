import { socialLinks } from '../data';
import { SocialLink, PageLinks } from './index';

export default function Footer() {
	return (
		<footer className='section footer'>
			<PageLinks
				parentClass='footer-links'
				itemClass='footer-link'
			/>

			<ul className='footer-icons'>
				{socialLinks.map((link) => {
					return (
						<SocialLink
							key={link.id}
							link={link}
							itemClass='footer-icon'
						/>
					);
				})}
			</ul>
			<p className='copyright'>
				copyright &copy; Backroads travel tours company
				<span id='date'>{new Date().getFullYear()}</span> all rights reserved
			</p>
		</footer>
	);
}
