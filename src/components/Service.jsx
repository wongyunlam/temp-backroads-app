export default function Service({ id, icon, title, text }) {
	return (
		<article
			key={id}
			className='service'
		>
			<span className='service-icon'>
				<i className={icon}></i>
			</span>
			<div className='service-info'>
				<h4 className='service-title'>{title}</h4>
				<p className='service-text'>{text}</p>
			</div>
		</article>

		//     <article className='service'>
		//     <span className='service-icon'>
		//         <i className='fas fa-socks fa-fw'></i>
		//     </span>
		//     <div className='service-info'>
		//         <h4 className='service-title'>amazing comfort</h4>
		//         <p className='service-text'>
		//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
		//             officia.
		//         </p>
		//     </div>
		// </article>
	);
}
