import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";

type DragState = {
	args: [number];
	down: boolean;
	movement: [number, number];
	direction: [number, number];
	velocity: number;
};

let dragHandler: (state: DragState) => void;

vi.mock("react-use-gesture", () => ({
	useDrag: (fn: (state: DragState) => void) => {
		dragHandler = fn;
		return (index: number) => ({ "data-testid": `card-${index}` });
	},
}));

vi.mock("./styles.module.css", () => ({
	default: {
		container: "container",
		deck: "deck",
		content: "content",
	},
}));

import { Portfolio } from "./Portfolio";

beforeEach(() => {
	vi.useFakeTimers();
});

afterEach(() => {
	vi.useRealTimers();
});

test("Portfolio renders titled cards", () => {
	render(
		<Portfolio
			id="portfolio"
			title="PORTFOLIO"
			cards={["chase", "us-soccer"]}
		/>,
	);
	expect(screen.getByRole("heading", { name: "PORTFOLIO" })).toBeDefined();
	expect(
		screen.getByRole("img", { name: "chase portfolio card" }),
	).toBeDefined();
	expect(
		screen.getByRole("img", { name: "us soccer portfolio card" }),
	).toBeDefined();
});

test("Portfolio drag covers flick and reset paths", () => {
	render(<Portfolio id="portfolio" title="PORTFOLIO" cards={["a", "b"]} />);

	act(() => {
		dragHandler({
			args: [0],
			down: true,
			movement: [40, 0],
			direction: [1, 0],
			velocity: 0.01,
		});
	});

	act(() => {
		dragHandler({
			args: [0],
			down: false,
			movement: [10, 0],
			direction: [1, 0],
			velocity: 0.01,
		});
	});

	act(() => {
		dragHandler({
			args: [0],
			down: false,
			movement: [-120, 0],
			direction: [-1, 0],
			velocity: 0.5,
		});
	});

	act(() => {
		dragHandler({
			args: [1],
			down: false,
			movement: [120, 0],
			direction: [1, 0],
			velocity: 0.5,
		});
	});

	act(() => {
		vi.advanceTimersByTime(600);
	});

	expect(screen.getByRole("heading", { name: "PORTFOLIO" })).toBeDefined();
});
