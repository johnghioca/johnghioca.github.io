import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { Section } from "@/components/atoms/Section";

const HomeSection = () => {
	return (
		<Section id="home">
			<Heading className="text-3xl text-center text-balance mx-0 my-5">
				HELLO, MY NAME IS <span className="text-[#00a0dc]">JOHN GHIOCA</span>
			</Heading>
			<Paragraph className="text-lg text-balance text-center my-5">
				I&apos;m a full-stack web developer using popular libraries, such as{" "}
				<span className="text-[#00a0dc] font-bold">React</span> and{" "}
				<span className="text-[#00a0dc] font-bold">Express</span>, to create
				websites and apps. Check out some of the companies I&apos;ve worked with
				below.
			</Paragraph>
		</Section>
	);
};

export { HomeSection };
