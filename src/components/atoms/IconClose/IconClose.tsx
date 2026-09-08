import { twMerge } from "tailwind-merge";

type IconCloseProps = React.ComponentPropsWithoutRef<"svg">;

const IconClose = ({ className = "", ...otherProps }: IconCloseProps) => {
	return (
		<svg
			className={twMerge("p-1", className)}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			overflow="visible"
			stroke="white"
			strokeWidth="10"
			strokeLinecap="round"
			{...otherProps}
		>
			<title>Close mobile menu</title>
			<line x2="100" y2="100" />
			<line x1="100" y2="100" />
		</svg>
	);
};

export { IconClose, type IconCloseProps };
