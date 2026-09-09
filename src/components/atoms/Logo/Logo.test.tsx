import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Logo } from "./Logo";

test("Page", () => {
	render(<Logo>John Ghioca</Logo>);
	expect(screen.getByRole("heading", { level: 1, name: "John Ghioca" })).toBeDefined();
});
