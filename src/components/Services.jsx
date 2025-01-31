import { Title, Service } from './index';
import { services } from '../data';

export default function Services() {
	return (
		<section
			className='section services'
			id='services'
		>
			<Title
				title='our'
				subtitle='services'
			/>

			<div className='section-center services-center'>
				{services.map((service) => {
					const { id, icon, title, text } = service;

					return (
						<Service
							key={id}
							id={id}
							icon={icon}
							title={title}
							text={text}
						/>
					);
				})}
			</div>
		</section>
	);
}
