import { twMerge } from "tailwind-merge";
import { IconClose } from "@/components/atoms/IconClose";
import { IconMenu } from "@/components/atoms/IconMenu";

type MenuToggleProps = {
	isOpen: boolean;
	onToggle: () => void;
	className?: string;
};

const MenuToggle = ({ isOpen, onToggle, className = "" }: MenuToggleProps) => {
	return (
		<button
			className={twMerge("block w-7 h-7 cursor-pointer xl:hidden", className)}
			type="button"
			aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
			aria-expanded={isOpen}
			onClick={onToggle}
		>
			{isOpen ? <IconClose /> : <IconMenu />}
		</button>
	);
};

export { MenuToggle, type MenuToggleProps };
