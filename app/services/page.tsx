import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
    title: "Services | Kev-Développement",
    description:
        "Web design, développement, référencement, hébergement et maintenance : découvrez les services de Kévin Mazé, développeur web freelance.",
};

export default function Services() {
    return <ServicesContent />;
}
