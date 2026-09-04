import type { Metadata } from "next";
import { Fraunces, Work_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const fraunces = Fraunces({
	variable: "--font-fraunces",
	weight: ["400", "600", "700"],
	subsets: ["latin"],
});

const workSans = Work_Sans({
	variable: "--font-work-sans",
	weight: ["400", "500", "600"],
	subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	weight: ["400", "500", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "JoshuahBoardman.com",
	description: "Joshuah's cozy corner of the internet.",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${fraunces.variable} ${workSans.variable} ${jetbrainsMono.variable} h-full antialiased`}>
			<head>
				<Script
					id="theme-init"
					strategy="beforeInteractive"
					dangerouslySetInnerHTML={{
						__html: `(function() {
          var theme = localStorage.getItem("theme");
          if (theme) document.documentElement.setAttribute("data-theme", theme);
        })();`,
					}}
				/>
			</head>
			<body className="min-h-full flex flex-col pt-0 px-6 pb-24">
				<Header />
				<main className="w-full max-w-270 my-0 mx-auto">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
