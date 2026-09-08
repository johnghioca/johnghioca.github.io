import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { Section } from "@/components/atoms/Section";

type AboutSectionProps = {
	id: string;
	title: string;
	paragraphs: string[];
};

const AboutSection = ({ id, title, paragraphs }: AboutSectionProps) => {
	return (
		<Section id={id}>
			<Heading>{title}</Heading>
			{paragraphs.map((paragraph) => (
				<Paragraph key={paragraph.slice(0, 32)} className="my-4">
					{paragraph}
				</Paragraph>
			))}
		</Section>
	);
};

export { AboutSection, type AboutSectionProps };
