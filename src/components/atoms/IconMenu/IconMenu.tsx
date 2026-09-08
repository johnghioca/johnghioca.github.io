type IconMenuProps = React.ComponentPropsWithoutRef<"svg">;

const IconMenu = ({ ...otherProps }: IconMenuProps) => {
	return (
		<svg viewBox="0 0 100 100" fill="white" {...otherProps}>
			<title>Open mobile menu</title>
			<rect y="15" width="100" height="10" rx="8" />
			<rect y="45" width="100" height="10" rx="8" />
			<rect y="75" width="100" height="10" rx="8" />
		</svg>
	);
};

export { IconMenu, type IconMenuProps };
