import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Brand } from "./Brand";

test("Brand renders logo children", () => {
	render(<Brand>John Ghioca</Brand>);
	expect(
		screen.getByRole("heading", { level: 1, name: "John Ghioca" }),
	).toBeDefined();
});
