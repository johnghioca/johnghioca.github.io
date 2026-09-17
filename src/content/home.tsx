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
				I&apos;m a web developer specializing in modern,
				high-performance websites and applications, with a focus on the{" "}
				<span className="text-[#00a0dc]">JAMstack</span> ecosystem.
				I work primarily with Next.js, React, TypeScript, Supabase,
				and headless CMS platforms to build fast, scalable, and engaging digital experiences.
				Below are some of the companies I've had the opportunity to work with.
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
			"Strong problem solver and critical thinking Senior Developer with deep technical proficiency across front-end and back-end technologies. Proven ability to resolve complex issues, anticipate future challenges, architect, and complete scalable systems. Recognized for strategic leadership, making informed technical decisions, adaptability, and collaborating effectively with cross-functional teams.",
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
