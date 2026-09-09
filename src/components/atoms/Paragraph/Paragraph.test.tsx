import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Paragraph } from "./Paragraph";

test("Paragraph renders", () => {
	render(<Paragraph className="my-4">Hello</Paragraph>);
	expect(screen.getByText("Hello")).toBeDefined();
});
