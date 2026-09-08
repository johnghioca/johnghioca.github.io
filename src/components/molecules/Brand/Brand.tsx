import { Logo } from "@/components/atoms/Logo";

type BrandProps = {
	children?: React.ReactNode;
};

const Brand = ({ children = "John Ghioca" }: BrandProps) => {
	return <Logo>{children}</Logo>;
};

export { Brand, type BrandProps };
