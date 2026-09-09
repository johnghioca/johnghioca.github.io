import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { ContactSection } from "./ContactSection";

test("ContactSection renders form fields", () => {
	render(
		<ContactSection
			id="contact"
			title="CONTACT"
			formAction="/submit"
			formMethod="post"
			fields={[
				{ id: "name", name: "name", label: "Your Name", required: true },
				{
					as: "textarea",
					id: "message",
					name: "message",
					label: "Your Message",
					required: true,
				},
			]}
			requiredNote="*All fields are required."
			submitLabel="Send"
		/>,
	);
	expect(screen.getByRole("heading", { name: "CONTACT" })).toBeDefined();
	expect(screen.getByLabelText("Your Name")).toBeDefined();
	expect(screen.getByLabelText("Your Message").tagName).toBe("TEXTAREA");
	expect(screen.getByText("*All fields are required.")).toBeDefined();
	expect(screen.getByRole("button", { name: "Send" })).toBeDefined();
	expect(document.querySelector("form")?.getAttribute("action")).toBe(
		"/submit",
	);
	expect(document.querySelector("form")?.getAttribute("method")).toBe("post");
});
