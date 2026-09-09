import { render, screen } from "@testing-library/react";
import { afterEach, expect, test, vi } from "vitest";
import { Footer } from "./Footer";

afterEach(() => {
	vi.useRealTimers();
});

test("Footer renders copyright range", () => {
	vi.useFakeTimers();
	vi.setSystemTime(new Date("2026-06-01"));
	render(<Footer startYear={2017} name="John Ghioca" />);
	expect(screen.getByText("© 2017-2026 John Ghioca")).toBeDefined();
});
