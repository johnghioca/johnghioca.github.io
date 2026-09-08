import { useState } from "react";
import { Brand } from "@/components/molecules/Brand";
import { MenuToggle } from "@/components/molecules/MenuToggle";
import { NavItem } from "@/components/molecules/NavItem";

const NAV_LINKS = [
	{ href: "#home", label: "HOME" },
	{ href: "#portfolio", label: "PORTFOLIO" },
	{ href: "#about", label: "ABOUT" },
	{ href: "#contact", label: "CONTACT" },
] as const;

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleNavClick = () => {
		if (typeof window !== "undefined" && window.innerWidth < 1280) {
			setIsOpen(false);
		}
	};

	return (
		<header className="bg-black fixed top-0 left-0 right-0 z-10">
			<div className="xl:max-w-6xl xl:mx-auto xl:flex xl:items-center xl:justify-between">
				<div className="h-16 flex items-center justify-between mx-5 md:mx-12 xl:mx-0">
					<Brand />
					<MenuToggle isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
				</div>
				<nav className="xl:w-5/12">
					<ul
						className={`${
							isOpen ? "max-h-56" : "max-h-0"
						} overflow-hidden transition-[max-height] duration-300 xl:max-h-none xl:flex xl:justify-between`}
					>
						{NAV_LINKS.map(({ href, label }) => (
							<NavItem key={href} href={href} onClick={handleNavClick}>
								{label}
							</NavItem>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export { Header };
