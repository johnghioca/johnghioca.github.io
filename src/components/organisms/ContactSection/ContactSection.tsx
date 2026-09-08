import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { Section } from "@/components/atoms/Section";
import { FormField } from "@/components/molecules/FormField";

const ContactSection = () => {
	return (
		<Section id="contact">
			<Heading>CONTACT</Heading>
			<form
				className="m-0 px-0 pt-4 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-2"
				action="https://formspree.io/f/mnqwvegb"
				method="post"
			>
				<FormField
					className="mb-4"
					id="name"
					name="name"
					label="Your Name"
					placeholder="Name"
					required
				/>
				<FormField
					className="mb-4"
					id="email"
					name="email"
					label="Your Email Address"
					type="email"
					placeholder="email@domain.com"
					required
				/>
				<FormField
					as="textarea"
					id="message"
					name="message"
					label="Your Message"
					placeholder="Enter your message"
					required
				/>
				<div className="m-0 p-0 border-0 md:col-span-2">
					<Paragraph className="mb-4">
						<small>*All fields are required.</small>
					</Paragraph>
					<Button type="submit">Send</Button>
				</div>
			</form>
		</Section>
	);
};

export { ContactSection };
