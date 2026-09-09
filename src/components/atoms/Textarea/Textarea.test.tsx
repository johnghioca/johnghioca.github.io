import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Textarea } from "./Textarea";

test("Textarea renders", () => {
	render(
		<Textarea
			id="message"
			name="message"
			aria-label="Message"
			className="extra"
		/>,
	);
	expect(screen.getByRole("textbox", { name: "Message" })).toBeDefined();
});
