import { ProviderReduxToolkit } from "@/configs/provider/Redux";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";
import { cn } from "@/lib/utils";
import { LayoutMain } from "@/resources/layouts/LayoutMain/Main";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				<ProviderReduxToolkit>
					<LayoutMain>{children}</LayoutMain>
				</ProviderReduxToolkit>
			</body>
		</html>
	);
}
