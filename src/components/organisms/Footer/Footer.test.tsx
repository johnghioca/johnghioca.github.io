import { render } from "@testing-library/react";
import { afterEach, test, vi } from "vitest";
import { Footer } from "./Footer";

afterEach(() => {
	vi.useRealTimers();
});

test("Footer renders copyright range", () => {
	vi.useFakeTimers();
	vi.setSystemTime(new Date("2026-06-01"));
	render(
		<Footer
			linkedIn={href: "#", label: "LinkedIn"}
			gitHub={href: "#", label: "GitHub"}
			startYear={2017}
			name="John Ghioca"
		/>,
	);
	expect(screen.getByRole("img", { name: "LinkedIn" })).toBeDefined();
	expect(screen.getByRole("img", { name: "GitHub" })).toBeDefined();
	expect(screen.getByText("© 2017-2026 John Ghioca")).toBeDefined();
});
