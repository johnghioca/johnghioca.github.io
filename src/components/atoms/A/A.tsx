import { twMerge } from "tailwind-merge";

type AProps = React.ComponentPropsWithoutRef<"a">;

const A: React.FC<AProps> = ({ className = "", children, ...props }) => {
	return (
		<a
			className={twMerge(
				"block h-12 leading-12 font-bold text-center border-b border-solid -outline-offset-1",
				"bg-[#069] border-b-black xl:bg-transparent", // base color styles
				"transition-[background] duration-600", // transition styles
				"hover:bg-[#00a0dc] xl:hover:bg-transparent xl:hover:text-[#00a0dc]", // hover styles
				"focus:bg-[#00a0dc] xl:focus:bg-transparent xl:focus:text-[#00a0dc]", // focus styles
				"xl:h-16 xl:leading-16 xl:rounded-sm xl:border-0", // xl styles
				className,
			)}
			{...props}
		>
			{children}
		</a>
	);
};

export { A, type AProps };
