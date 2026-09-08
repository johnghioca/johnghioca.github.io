import { twMerge } from "tailwind-merge";

type LabelProps = React.ComponentPropsWithoutRef<"label">;

const Label = ({
	className = "",
	children,
	htmlFor,
	...otherProps
}: LabelProps) => {
	return (
		<label
			className={twMerge("block font-bold", className)}
			htmlFor={htmlFor}
			{...otherProps}
		>
			{children}
		</label>
	);
};

export { Label, type LabelProps };
