import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { IconMenu } from "./IconMenu";

test("IconMenu renders accessible title", () => {
	render(<IconMenu />);
	expect(screen.getByTitle("Open mobile menu")).toBeDefined();
});
