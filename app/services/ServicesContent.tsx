"use client";

import { useState } from "react";
import {
    Code2,
    LayoutGrid,
    Search,
    Wrench,
    ArrowRight,
    X,
    CheckCircle2,
    type LucideIcon,
} from "lucide-react";

type Service = {
    icon: LucideIcon;
    title: string;
    description: string;
    items: string[];
};

const services: Service[] = [
    {
        icon: LayoutGrid,
        title: "Web Design",
        description:
            "Le design de votre site est très important. Il véhicule votre identité, vos valeurs et vous démarque positivement de la concurrence.",
        items: [
            "Branding afin de cibler au mieux vos besoins.",
            "Création ou utilisation de votre chartre graphique.",
            "Création de l'UI / UX design.",
            "Création de maquettes sur mesure.",
        ],
    },
    {
        icon: Code2,
        title: "Développement de votre site",
        description:
            "Pour la création ou la mise à jour de votre site, je vous accompagne dans votre projet. Le développement de votre site web est réalisé avec soin.",
        items: [
            "Intégration suivant la maquette que vous avez validé.",
            "Technologie adapté à votre demande. (HTML, React, Symfony...).",
            "Fonctionnalités spécifiques que vous souhaitez intégrer.",
            "Dynamisme des pages.",
        ],
    },
    {
        icon: Search,
        title: "Référencement",
        description:
            "Votre site est développé avec pour objectif d'apparaitre dans les premières pages des moteurs de recherche. Analysons puis optimisons ensemble votre contenu.",
        items: [
            "Référencement naturel.",
            "Temps de chargement des pages optimisé.",
            "Indexation automatique des pages.",
            "Recherche des mots-clés les plus pertinants.",
            "Intégration des différents réseaux sociaux.",
        ],
    },
    {
        icon: Wrench,
        title: "Hébergement et maintenance",
        description:
            "Votre site sera hébergé sur un serveur robuste, puissant, supportant la montée en puissance de votre trafic. Mis à jour régulièrement, votre site restera en bonne santé.",
        items: [
            "Hébergement sur serveur dédié respectant la technologie choisie.",
            "Création ou récupération de votre nom de domaine.",
            "Mise à jour de votre site internet suivant vos besoins.",
            "Petites modifications graphiques ou de contenu.",
            "Optimisation des performances.",
            "Sauvegarde en cas de piratage ou problème de serveur.",
        ],
    },
];

export default function ServicesContent() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div>
            <section className="my-section" id="services">
                <h1 className="text-3xl sm:text-4xl text-white text-center font-bold">
                    Services
                </h1>
                <h2 className="block text-base sm:text-xl mb-10 lg:mb-16 text-center">
                    Des prestations adaptées à vos besoins
                </h2>

                <div className="my-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(3,270px)] justify-center gap-6 lg:gap-x-[1.8rem]">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="relative border border-white/10 bg-container pt-20 sm:pt-24 pb-8 pl-6 sm:pl-10 pr-6 lg:pr-0"
                        >
                            <div>
                                <service.icon
                                    size={32}
                                    className="block text-white mb-4"
                                />
                                <h3 className="text-lg mb-4 font-medium">
                                    {service.title}
                                </h3>
                            </div>

                            <span
                                className="group/button text-white text-small inline-flex items-center gap-x-1 cursor-pointer"
                                onClick={() => setActiveIndex(index)}
                            >
                                Voir plus
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-200 ease-in-out group-hover/button:translate-x-1"
                                />
                            </span>

                            <div
                                className={`fixed inset-0 z-60 flex items-center justify-center bg-black/50 px-4 transition-[opacity,visibility] duration-300 ${
                                    activeIndex === index
                                        ? "opacity-100 visible"
                                        : "opacity-0 invisible"
                                }`}
                            >
                                <div
                                    className="relative w-full max-w-125 bg-neutral-900 pt-14 sm:pt-18 px-6 sm:px-10 pb-8 sm:pb-10 rounded-3xl"
                                    onClick={() => setActiveIndex(null)}
                                >
                                    <X
                                        size={24}
                                        className="absolute top-6 right-6 text-white cursor-pointer"
                                    />

                                    <h3 className="text-xl sm:text-2xl mb-4 font-medium text-center">
                                        {service.title}
                                    </h3>
                                    <p className="text-small px-2 sm:px-14 mb-8 text-center">
                                        {service.description}
                                    </p>

                                    <ul className="grid gap-y-3">
                                        {service.items.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-center gap-x-2"
                                            >
                                                <CheckCircle2
                                                    size={18}
                                                    className="text-white shrink-0"
                                                />
                                                <p className="text-small">
                                                    {item}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
