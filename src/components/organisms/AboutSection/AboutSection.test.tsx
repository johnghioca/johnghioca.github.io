import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { AboutSection } from "./AboutSection";

test("AboutSection renders title and paragraphs", () => {
	render(
		<AboutSection
			id="about"
			title="ABOUT"
			paragraphs={["First paragraph.", "Second paragraph."]}
		/>,
	);
	expect(screen.getByRole("heading", { name: "ABOUT" })).toBeDefined();
	expect(screen.getByText("First paragraph.")).toBeDefined();
	expect(screen.getByText("Second paragraph.")).toBeDefined();
});
