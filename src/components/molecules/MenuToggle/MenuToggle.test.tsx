import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { MenuToggle } from "./MenuToggle";

test("MenuToggle closed state", () => {
	const onToggle = vi.fn();
	render(<MenuToggle isOpen={false} onToggle={onToggle} />);
	const button = screen.getByRole("button", { name: "Open mobile menu" });
	expect(button).toHaveProperty("ariaExpanded", "false");
	fireEvent.click(button);
	expect(onToggle).toHaveBeenCalledOnce();
});

test("MenuToggle open state", () => {
	render(<MenuToggle isOpen onToggle={() => {}} className="extra" />);
	expect(
		screen.getByRole("button", { name: "Close mobile menu" }),
	).toHaveProperty("ariaExpanded", "true");
});
