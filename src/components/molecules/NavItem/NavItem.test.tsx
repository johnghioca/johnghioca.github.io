import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { NavItem } from "./NavItem";

test("NavItem renders link and handles click", () => {
	const onClick = vi.fn();
	render(
		<ul>
			<NavItem href="#about" onClick={onClick}>
				ABOUT
			</NavItem>
		</ul>,
	);
	fireEvent.click(screen.getByRole("link", { name: "ABOUT" }));
	expect(onClick).toHaveBeenCalledOnce();
});
