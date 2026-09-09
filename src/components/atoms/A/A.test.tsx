import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { A } from "./A";

test("A renders link", () => {
	render(
		<A href="#home" className="extra">
			HOME
		</A>,
	);
	expect(screen.getByRole("link", { name: "HOME" })).toHaveProperty(
		"href",
		expect.stringContaining("#home"),
	);
});
