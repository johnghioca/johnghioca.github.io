import type { ReactNode } from "react";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { Section } from "@/components/atoms/Section";

type HomeSectionProps = {
	id: string;
	heading: ReactNode;
	body: ReactNode;
};

const HomeSection = ({ id, heading, body }: HomeSectionProps) => {
	return (
		<Section id={id}>
			<Heading className="text-3xl text-center text-balance mx-0 my-5">
				{heading}
			</Heading>
			<Paragraph className="text-lg text-balance text-center my-5">
				{body}
			</Paragraph>
		</Section>
	);
};

export { HomeSection, type HomeSectionProps };
