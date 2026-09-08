import Head from "next/head";
import { HomePage } from "@/components/templates/HomePage";
import { homeContent } from "@/content/home";

export default function Home() {
	return (
		<>
			<Head>
				<title>{homeContent.documentTitle}</title>
			</Head>
			<HomePage content={homeContent} />
		</>
	);
}
