import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { IconClose } from "./IconClose";

test("IconClose renders accessible title", () => {
	render(<IconClose className="extra" />);
	expect(screen.getByTitle("Close mobile menu")).toBeDefined();
});
