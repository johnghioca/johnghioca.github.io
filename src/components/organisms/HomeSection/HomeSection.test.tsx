import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { HomeSection } from "./HomeSection";

test("HomeSection renders heading and body", () => {
	render(<HomeSection id="home" heading="Hello" body="Welcome to the site." />);
	expect(document.getElementById("home")).toBeDefined();
	expect(screen.getByRole("heading", { name: "Hello" })).toBeDefined();
	expect(screen.getByText("Welcome to the site.")).toBeDefined();
});
