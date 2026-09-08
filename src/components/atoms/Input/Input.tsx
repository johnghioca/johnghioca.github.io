import { twMerge } from "tailwind-merge";

type InputProps = React.ComponentPropsWithoutRef<"input">;

const Input = ({ className = "", ...otherProps }: InputProps) => {
	return (
		<input
			className={twMerge(
				"bg-white text-black w-full m-0 py-1 pl-2 pr-0 border-0 rounded-sm",
				className,
			)}
			{...otherProps}
		/>
	);
};

export { Input, type InputProps };
