import type { ReactNode } from "react";
import type {
	FormFieldInputProps,
	FormFieldTextareaProps,
} from "@/components/molecules/FormField";

type NavLink = {
	href: string;
	label: string;
};

type FormFieldConfig =
	| Omit<FormFieldInputProps, "className">
	| Omit<FormFieldTextareaProps, "className">;

type HomeContent = {
	documentTitle: string;
	brandName: string;
	navLinks: NavLink[];
	home: {
		id: string;
		heading: ReactNode;
		body: ReactNode;
	};
	portfolio: {
		id: string;
		title: string;
		cards: string[];
	};
	about: {
		id: string;
		title: string;
		paragraphs: string[];
	};
	contact: {
		id: string;
		title: string;
		formAction: string;
		formMethod: "post";
		fields: FormFieldConfig[];
		requiredNote: string;
		submitLabel: string;
	};
	footer: {
		startYear: number;
		name: string;
	};
};

const homeContent: HomeContent = {
	documentTitle: "John Ghioca | Portfolio",
	brandName: "John Ghioca",
	navLinks: [
		{ href: "#home", label: "HOME" },
		{ href: "#portfolio", label: "PORTFOLIO" },
		{ href: "#about", label: "ABOUT" },
		{ href: "#contact", label: "CONTACT" },
	],
	home: {
		id: "home",
		heading: (
			<>
				<span className="text-[#00a0dc]">JOHN GHIOCA'S</span> PORTFOLIO
			</>
		),
		body: (
			<>Below are some of the companies John has built experiences for.</>
		),
	},
	portfolio: {
		id: "portfolio",
		title: "PORTFOLIO",
		cards: [
			"chase",
			"marriott",
			"mondelez",
			"verizon",
			"starbucks",
			"google",
			"maybelline",
			"murad",
			"us-soccer",
			"cruise",
			"palms",
			"nike",
			"hss",
			"ibm",
			"audi",
			"sunrun",
			"mayo",
			"chick-fil-a",
			"campari-group",
			"capital-one",
			"realberry",
		],
	},
	about: {
		id: "about",
		title: "ABOUT",
		paragraphs: [
			"Strong problem solver and critical thinking Senior Developer with deep technical proficiency across front-end and back-end technologies. Proven ability to resolve complex issues, anticipate future challenges, architect, and complete scalable systems. Recognized for strategic leadership, making informed technical decisions, adaptability, and collaborating effectively with cross-functional teams.",
			"Primary tech stack: React, TypeScript, Next.js, Tailwind, Express, Node.js, RESTful APIs, GraphQL, Headless CMS, MySQL, AWS, Docker, Playwright, Vitest, Jest, GitHub Actions.",
			"If you’d like to get in touch, please use the contact form below.",
		],
	},
	contact: {
		id: "contact",
		title: "CONTACT",
		formAction: "https://formspree.io/f/mnqwvegb",
		formMethod: "post",
		fields: [
			{
				id: "name",
				name: "name",
				label: "Your Name",
				placeholder: "Name",
				required: true,
			},
			{
				id: "email",
				name: "email",
				label: "Your Email Address",
				type: "email",
				placeholder: "email@domain.com",
				required: true,
			},
			{
				as: "textarea",
				id: "message",
				name: "message",
				label: "Your Message",
				placeholder: "Enter your message",
				required: true,
			},
		],
		requiredNote: "*All fields are required.",
		submitLabel: "Send",
	},
	footer: {
		startYear: 2017,
		name: "John Ghioca",
	},
};

export { homeContent, type FormFieldConfig, type HomeContent, type NavLink };
