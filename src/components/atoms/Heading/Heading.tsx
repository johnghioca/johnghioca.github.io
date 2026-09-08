import { twMerge } from "tailwind-merge";

type HeadingProps = React.ComponentPropsWithoutRef<"h2">;

const Heading = ({ className = "", children, ...otherProps }: HeadingProps) => {
	return (
		<h2
			className={twMerge("font-serif font-bold text-2xl", className)}
			{...otherProps}
		>
			{children}
		</h2>
	);
};

export { Heading, type HeadingProps };
