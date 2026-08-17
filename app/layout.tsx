import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./styles/globals.css";
import HoverGradientNavBar from "./UI/components/navbar/hover-gradient-nav-bar";
import { DarkGradientBg } from "@/app/UI/elegant-dark-pattern";
import ContentWrapper from "./UI/components/ContentWrapper";

const googleSansFlex = Google_Sans_Flex({
    subsets: ["latin"],
    variable: "--font-google-sans-flex",
});

export const metadata: Metadata = {
    title: "Kev-Développement | Développeur Web freelance",
    description:
        "Kévin Mazé, développeur web freelance : conception de sites internet sur-mesure pour améliorer votre image de marque et votre visibilité en ligne.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={googleSansFlex.variable}>
            <body className="min-h-full flex flex-col">
                <DarkGradientBg>
                    <ContentWrapper>{children}</ContentWrapper>
                    <HoverGradientNavBar />
                </DarkGradientBg>
            </body>
        </html>
    );
}
