import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Heading } from "./Heading";

test("Heading renders", () => {
	render(<Heading className="extra">ABOUT</Heading>);
	expect(
		screen.getByRole("heading", { level: 2, name: "ABOUT" }),
	).toBeDefined();
});
