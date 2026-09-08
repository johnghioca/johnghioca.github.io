import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { Section } from "@/components/atoms/Section";

const AboutSection = () => {
	return (
		<Section id="about">
			<Heading>ABOUT</Heading>
			<Paragraph className="my-4">
				While in college I majored in computer science and minored in
				mathematics. Currently I am a full-stack developer in an ad agency
				creating websites that allows the user to experience a site suited for
				the device they are using. I write valid markup that follows current web
				standards in order to ensure visitors have access to the content on the
				page.
			</Paragraph>
			<Paragraph className="my-4">
				From mobile to desktop, I can provide an optimized page for any screen
				size with responsive web design. Feel free to contact me below if you
				would like to get in touch.
			</Paragraph>
		</Section>
	);
};

export { AboutSection };
