import { AboutSection } from "@/components/organisms/AboutSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { HomeSection } from "@/components/organisms/HomeSection";
import { Portfolio } from "@/components/organisms/Portfolio";

const HomePage = () => {
	return (
		<div className="bg-gray-600 text-white font-sans">
			<Header />
			<main>
				<div className="overflow-hidden mx-5 md:mx-12 xl:max-w-6xl xl:mx-auto">
					<HomeSection />
					<Portfolio />
					<AboutSection />
					<ContactSection />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export { HomePage };
