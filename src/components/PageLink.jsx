export default function PageLink({ itemClass, link }) {
	return (
		<li key={link.id}>
			<a
				href={link.href}
				className={itemClass}
			>
				{link.text}
			</a>
		</li>
	);
}
