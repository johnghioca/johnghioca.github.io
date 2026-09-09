import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Button } from "./Button";

test("Button renders", () => {
	render(
		<Button type="submit" className="extra">
			Send
		</Button>,
	);
	expect(screen.getByRole("button", { name: "Send" })).toBeDefined();
});
