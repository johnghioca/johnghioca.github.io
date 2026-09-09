import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Section } from "./Section";

test("Section renders with id", () => {
	render(
		<Section id="about" className="extra">
			Content
		</Section>,
	);
	expect(screen.getByText("Content").closest("section")?.id).toBe("about");
});
