import { Title, Tour } from './index';
import { tours } from '../data';

export default function Tours() {
	return (
		<section
			className='section'
			id='tours'
		>
			<Title
				title='featured'
				subtitle='tours'
			/>

			<div className='section-center featured-center'>
				{tours.map((tour) => {
					const { id, image, title, info, location, date, cost, duration } = tour;

					return (
						<Tour
							key={id}
							id={id}
							image={image}
							title={title}
							info={info}
							location={location}
							date={date}
							cost={cost}
							duration={duration}
						/>
					);
				})}
			</div>
		</section>
	);
}
