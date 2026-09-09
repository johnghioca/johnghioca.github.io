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
				HELLO, MY NAME IS <span className="text-[#00a0dc]">JOHN GHIOCA</span>
			</>
		),
		body: (
			<>
				I&apos;m a full-stack web developer focused on building modern,
				high-performance websites and applications using the{" "}
				<span className="text-[#00a0dc]">JAMstack</span>, including Next.js,
				React, TypeScript, Supabase, and headless CMS platforms.
				I use these technologies to create fast, scalable, and engaging digital experiences. 
				Check out some of the companies I&apos;ve had the opportunity to work with below.
			</>
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
			"I studied Computer Science with a minor in Mathematics, and I’m currently a full-stack developer with 18+ years of experience. I build responsive, user-focused websites while also working on the backend systems and services that power them.",
			"I enjoy solving problems across the entire stack—from creating clean, standards-compliant front-end experiences to designing reliable backend functionality, APIs, and data-driven solutions. I’m particularly interested in developing systems that are maintainable, scalable, and efficient, with an emphasis on thoughtful engineering and solving problems that have a real impact.",
			"From mobile to desktop, I create optimized experiences that adapt seamlessly to any screen size while keeping performance, accessibility, and usability in mind.",
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
