import { twMerge } from "tailwind-merge";

type SectionProps = React.ComponentPropsWithoutRef<"section">;

const Section = ({ className = "", children, ...otherProps }: SectionProps) => {
	return (
		<section
			className={twMerge(
				"bg-black mt-14 p-4 rounded-lg md:mt-18 md:p-8 scroll-mt-30 md:scroll-mt-34",
				className,
			)}
			{...otherProps}
		>
			{children}
		</section>
	);
};

export { Section, type SectionProps };
