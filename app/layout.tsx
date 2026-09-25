import type { Metadata } from "next";
import { Fraunces, Work_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
	variable: "--font-fraunces",
	weight: ["400", "600"],
	subsets: ["latin"],
});

const workSans = Work_Sans({
	variable: "--font-work-sans",
	weight: ["400", "500", "600"],
	subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	weight: ["400", "500"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://joshuahboardman.com"),
	title: "JoshuahBoardman.com",
	description: "Joshuah's cozy corner of the internet.",
	openGraph: {
		title: "JoshuahBoardman.com",
		description: "Joshuah's cozy corner of the internet.",
		type: "website",
		siteName: "JoshuahBoardman.com",
	},
};


export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${fraunces.variable} ${workSans.variable} ${jetbrainsMono.variable} h-full antialiased`}>
			<head>
				{/* Deliberately a raw <script>, not next/script's beforeInteractive
				    (which queues onto self.__next_s for Next's runtime to process
				    later, reintroducing exactly the flash this exists to prevent).
				    A plain inline script here is parsed and executed synchronously
				    by the browser, blocking rendering until data-theme is set. */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function() {
          var theme = localStorage.getItem("theme") || "dark";
          document.documentElement.setAttribute("data-theme", theme);
        })();`,
					}}
				/>
			</head>
			<body className="min-h-full flex flex-col pt-0 px-6 pb-24 max-[640px]:px-4 max-[640px]:pb-16">
				<Header />
				<main className="w-full max-w-270 my-0 mx-auto">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
