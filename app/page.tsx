import type { Metadata } from "next";
import HomeContent from "./home/HomeContent";

export const metadata: Metadata = {
    title: "Kev-Développement | Développeur Web freelance",
    description:
        "Kévin Mazé, développeur web freelance : conception de sites internet sur-mesure pour améliorer votre image de marque et votre visibilité en ligne.",
};

export default function Home() {
    return <HomeContent />;
}
