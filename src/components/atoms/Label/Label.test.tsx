import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Label } from "./Label";

test("Label renders with htmlFor", () => {
	render(
		<Label htmlFor="email" className="extra">
			Email
		</Label>,
	);
	expect(screen.getByText("Email")).toHaveProperty("htmlFor", "email");
});
