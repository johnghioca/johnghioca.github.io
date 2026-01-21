type AProps = React.ComponentPropsWithoutRef<"a">;

const A: React.FC<AProps> = ({ className = "", children, ...props }) => {
	return (
		<a
			className={`block bg-[#069] hover:bg-[#00a0dc] focus:bg-[#00a0dc] h-12 leading-12 font-bold text-center transition-[background] duration-600 border-b-black border-b border-solid xl:bg-transparent xl:border-0 xl:h-16 xl:leading-16 -outline-offset-1 xl:rounded-sm xl:hover:bg-transparent xl:focus:bg-transparent xl:hover:text-[#00a0dc] xl:focus:text-[#00a0dc] ${className}`}
			{...props}
		>
			{children}
		</a>
	);
};

export { A, type AProps };
