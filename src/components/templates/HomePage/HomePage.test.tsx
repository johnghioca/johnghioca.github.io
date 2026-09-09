import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import type { HomeContent } from "@/content/home";
import { HomePage } from "./HomePage";

vi.mock("@/components/organisms/Portfolio/styles.module.css", () => ({
	default: {
		container: "container",
		deck: "deck",
		content: "content",
	},
}));

const content: HomeContent = {
	documentTitle: "Test | Portfolio",
	brandName: "Test Brand",
	navLinks: [{ href: "#home", label: "HOME" }],
	home: { id: "home", heading: "Hello", body: "Body copy" },
	portfolio: { id: "portfolio", title: "PORTFOLIO", cards: ["chase"] },
	about: { id: "about", title: "ABOUT", paragraphs: ["About copy."] },
	contact: {
		id: "contact",
		title: "CONTACT",
		formAction: "/submit",
		formMethod: "post",
		fields: [
			{ id: "name", name: "name", label: "Your Name", required: true },
			{
				as: "textarea",
				id: "message",
				name: "message",
				label: "Your Message",
				required: true,
			},
		],
		requiredNote: "*All fields are required.",
		submitLabel: "Send",
	},
	footer: { startYear: 2017, name: "Test Brand" },
};

test("HomePage wires content into page sections", () => {
	render(<HomePage content={content} />);
	expect(
		screen.getByRole("heading", { level: 1, name: "Test Brand" }),
	).toBeDefined();
	expect(screen.getByRole("heading", { name: "Hello" })).toBeDefined();
	expect(screen.getByRole("heading", { name: "PORTFOLIO" })).toBeDefined();
	expect(screen.getByRole("heading", { name: "ABOUT" })).toBeDefined();
	expect(screen.getByRole("heading", { name: "CONTACT" })).toBeDefined();
	expect(screen.getByText(/© 2017-/)).toBeDefined();
});
