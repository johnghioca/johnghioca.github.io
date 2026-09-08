import { A, type AProps } from "@/components/atoms/A";

type NavItemProps = {
	href: AProps["href"];
	onClick?: AProps["onClick"];
	children: React.ReactNode;
};

const NavItem = ({ href, onClick, children }: NavItemProps) => {
	return (
		<li className="block">
			<A href={href} onClick={onClick}>
				{children}
			</A>
		</li>
	);
};

export { NavItem, type NavItemProps };
