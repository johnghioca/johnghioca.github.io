import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

const Button = ({ className = "", children, ...otherProps }: ButtonProps) => {
	return (
		<button
			className={twMerge(
				"bg-[#069] hover:bg-[#00a0dc] focus:bg-[#00a0dc] transition-[background] w-30 duration-600 rounded-sm cursor-pointer h-9 leading-9 font-bold inline-block align-middle m-0 px-4 py-0 border-0",
				className,
			)}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export { Button, type ButtonProps };
