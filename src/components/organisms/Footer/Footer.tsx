type FooterProps = {
	startYear: number;
	name: string;
};

const Footer = ({ startYear, name }: FooterProps) => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-black mt-14 md:mt-18">
			<div className="text-white text-center mx-5 py-3 md:mx-12 xl:max-w-6xl xl:mx-auto">
				<small>
					© {startYear}-{currentYear} {name}
				</small>
			</div>
		</footer>
	);
};

export { Footer, type FooterProps };
