import { AboutSection } from "@/components/organisms/AboutSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { HomeSection } from "@/components/organisms/HomeSection";
import { Portfolio } from "@/components/organisms/Portfolio";
import type { HomeContent } from "@/content/home";

type HomePageProps = {
	content: HomeContent;
};

const HomePage = ({ content }: HomePageProps) => {
	return (
		<div className="bg-gray-600 text-white font-sans">
			<Header brandName={content.brandName} navLinks={content.navLinks} />
			<main>
				<div className="overflow-hidden mx-5 md:mx-12 xl:max-w-6xl xl:mx-auto">
					<HomeSection {...content.home} />
					<Portfolio {...content.portfolio} />
					<AboutSection {...content.about} />
					<ContactSection {...content.contact} />
				</div>
			</main>
			<Footer {...content.footer} />
		</div>
	);
};

export { HomePage, type HomePageProps };
