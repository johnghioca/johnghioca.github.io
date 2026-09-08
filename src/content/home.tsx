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
				I&apos;m a full-stack web developer using popular libraries, such as{" "}
				<span className="text-[#00a0dc] font-bold">React</span> and{" "}
				<span className="text-[#00a0dc] font-bold">Express</span>, to create
				websites and apps. Check out some of the companies I&apos;ve worked with
				below.
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
			"While in college I majored in computer science and minored in mathematics. Currently I am a full-stack developer in an ad agency creating websites that allows the user to experience a site suited for the device they are using. I write valid markup that follows current web standards in order to ensure visitors have access to the content on the page.",
			"From mobile to desktop, I can provide an optimized page for any screen size with responsive web design. Feel free to contact me below if you would like to get in touch.",
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
