import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

vi.mock("next/head", () => ({
	default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock("@/components/organisms/Portfolio/styles.module.css", () => ({
	default: {
		container: "container",
		deck: "deck",
		content: "content",
	},
}));

import Home from "@/pages/index";

test("Home page sets document title and renders app", () => {
	render(<Home />);
	expect(document.title).toBe("John Ghioca | Portfolio");
	expect(
		screen.getByRole("heading", { level: 1, name: "John Ghioca" }),
	).toBeDefined();
});
