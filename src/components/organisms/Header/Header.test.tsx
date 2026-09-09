import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Header } from "./Header";

const navLinks = [
	{ href: "#home", label: "HOME" },
	{ href: "#about", label: "ABOUT" },
];

test("Header toggles menu and closes on narrow nav click", () => {
	Object.defineProperty(window, "innerWidth", {
		configurable: true,
		value: 800,
	});
	render(<Header brandName="John Ghioca" navLinks={navLinks} />);
	expect(
		screen.getByRole("heading", { level: 1, name: "John Ghioca" }),
	).toBeDefined();

	const toggle = screen.getByRole("button", { name: "Open mobile menu" });
	fireEvent.click(toggle);
	expect(
		screen.getByRole("button", { name: "Close mobile menu" }),
	).toBeDefined();

	fireEvent.click(screen.getByRole("link", { name: "HOME" }));
	expect(
		screen.getByRole("button", { name: "Open mobile menu" }),
	).toBeDefined();
});

test("Header keeps menu open on wide nav click", () => {
	Object.defineProperty(window, "innerWidth", {
		configurable: true,
		value: 1400,
	});
	render(<Header brandName="Brand" navLinks={navLinks} />);
	fireEvent.click(screen.getByRole("button", { name: "Open mobile menu" }));
	fireEvent.click(screen.getByRole("link", { name: "ABOUT" }));
	expect(
		screen.getByRole("button", { name: "Close mobile menu" }),
	).toBeDefined();
});
