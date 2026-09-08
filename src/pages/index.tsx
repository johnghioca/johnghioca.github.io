import Head from "next/head";
import { HomePage } from "@/components/templates/HomePage";

export default function Home() {
	return (
		<>
			<Head>
				<title>John Ghioca | Portfolio</title>
			</Head>
			<HomePage />
		</>
	);
}
