import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact | Kev-Développement",
    description:
        "Contactez Kévin Mazé, développeur web freelance, pour discuter de votre projet ou demander un devis.",
};

export default function Contact() {
    return <ContactContent />;
}
