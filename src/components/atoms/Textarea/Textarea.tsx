import { twMerge } from "tailwind-merge";

type TextareaProps = React.ComponentPropsWithoutRef<"textarea">;

const Textarea = ({ className = "", ...otherProps }: TextareaProps) => {
	return (
		<textarea
			className={twMerge(
				"bg-white overflow-auto block text-black resize-y w-full m-0 py-1 pl-2 pr-0 border-0 rounded-sm md:min-h-20",
				className,
			)}
			{...otherProps}
		/>
	);
};

export { Textarea, type TextareaProps };
