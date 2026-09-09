import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Input } from "./Input";

test("Input renders", () => {
	render(<Input id="name" name="name" aria-label="Name" className="extra" />);
	expect(screen.getByRole("textbox", { name: "Name" })).toBeDefined();
});
