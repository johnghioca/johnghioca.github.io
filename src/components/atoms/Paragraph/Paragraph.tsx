type ParagraphProps = React.ComponentPropsWithoutRef<"p">;

const Paragraph = ({
	className = "",
	children,
	...otherProps
}: ParagraphProps) => {
	return (
		<p className={className} {...otherProps}>
			{children}
		</p>
	);
};

export { Paragraph, type ParagraphProps };
