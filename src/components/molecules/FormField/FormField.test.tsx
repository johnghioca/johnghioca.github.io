import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { FormField } from "./FormField";

test("FormField renders text input by default", () => {
	render(
		<FormField
			id="name"
			name="name"
			label="Your Name"
			placeholder="Name"
			required
		/>,
	);
	expect(screen.getByLabelText("Your Name")).toHaveProperty("type", "text");
});

test("FormField renders email input", () => {
	render(
		<FormField
			id="email"
			name="email"
			label="Email"
			type="email"
			className="extra"
		/>,
	);
	expect(screen.getByLabelText("Email")).toHaveProperty("type", "email");
});

test("FormField renders textarea", () => {
	render(
		<FormField as="textarea" id="message" name="message" label="Message" />,
	);
	expect(screen.getByLabelText("Message").tagName).toBe("TEXTAREA");
});
