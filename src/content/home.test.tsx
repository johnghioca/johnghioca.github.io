import { expect, test } from "vitest";
import { homeContent } from "./home";

test("homeContent exposes expected shape", () => {
	expect(homeContent.documentTitle).toContain("John Ghioca");
	expect(homeContent.navLinks.length).toBeGreaterThan(0);
	expect(homeContent.portfolio.cards.length).toBeGreaterThan(0);
	expect(homeContent.about.paragraphs.length).toBeGreaterThan(0);
	expect(homeContent.contact.fields.length).toBeGreaterThan(0);
	expect(homeContent.footer.startYear).toBe(2017);
});
