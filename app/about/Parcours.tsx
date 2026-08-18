"use client";

import { useState } from "react";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

type ParcoursItem = {
    title: string;
    subtitle: string;
    calendar: string;
    side: "left" | "right";
};

const formation: ParcoursItem[] = [
    {
        title: "Formation Dev Web et Web mobile",
        subtitle: "Studi Ecole en ligne",
        calendar: "Janvier 2023 - Avril 2024 (Diplôme obtenu le 9 avril 2024)",
        side: "left",
    },
    {
        title: "Baccalauréat Professionnel Hôtellerie Restauration",
        subtitle: "CFA Avon (77)",
        calendar: "2007 - 2009",
        side: "right",
    },
    {
        title: "BEP Métier de la restauration",
        subtitle: "Lycée Antonin Carême (77)",
        calendar: "2005 - 2007",
        side: "left",
    },
];

const experience: ParcoursItem[] = [
    {
        title: "Développeur Web et Web mobile",
        subtitle: "Création micro-entreprise",
        calendar: "Septembre 2024",
        side: "right",
    },
    {
        title: "Cuisinier",
        subtitle: "La Popotte de Valou (30)",
        calendar: "Depuis Septembre 2023",
        side: "left",
    },
    {
        title: "Directeur Général",
        subtitle: "Création d'entreprise franchisé Le Kiosque à Pizzas (30)",
        calendar: "Septembre 2016 - Septembre 2023",
        side: "right",
    },
    {
        title: "Chef de Parti",
        subtitle: "Les 3 Brasseurs Sénart (77)",
        calendar: "2012 - 2016",
        side: "left",
    },
    {
        title: "Chef pâtissier",
        subtitle: "Le Cozy Dammarie (77)",
        calendar: "2011 - 2012",
        side: "right",
    },
    {
        title: "Commis cuisine",
        subtitle: "Les Pléiades * (77)",
        calendar: "2011",
        side: "left",
    },
    {
        title: "Commis cuisine",
        subtitle: "Les 3 Brasseurs Sénart (77)",
        calendar: "2009 - 2011",
        side: "right",
    },
];

const tabButtonClass =
    "text-base sm:text-lg font-medium mx-2 sm:mx-4 cursor-pointer inline-flex items-center relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.1em] after:bg-purple-400 after:opacity-0 after:transition-[opacity,transform] after:duration-300 hover:after:opacity-100 hover:after:translate-y-[0.2rem]";

function ParcoursRow({ item }: { item: ParcoursItem }) {
    return (
        <div
            className={`parcours__row ${
                item.side === "left"
                    ? "parcours__row--left"
                    : "parcours__row--right"
            }`}
        >
            <div className="[grid-area:dot]">
                <span className="inline-block w-3.25 h-3.25 bg-neutral-400 rounded-full" />
                <span className="block w-px h-full bg-neutral-400 translate-x-1.5 -translate-y-1.75" />
            </div>

            <div className="[grid-area:content]">
                <h3 className="text-sm sm:text-normal font-medium">
                    {item.title}
                </h3>
                <span className="inline-block text-xs sm:text-small mb-3 sm:mb-4">
                    {item.subtitle}
                </span>
                <div className="text-xs sm:text-small flex items-center gap-1">
                    <Calendar size={14} />
                    {item.calendar}
                </div>
            </div>
        </div>
    );
}

export default function Parcours() {
    const [active, setActive] = useState<"formation" | "experience">(
        "formation",
    );

    const items = active === "formation" ? formation : experience;

    return (
        <section className="my-section" id="parcours">
            <h2 className="text-3xl sm:text-4xl text-white text-center mb-2 font-bold">
                Parcours
            </h2>
            <span className="block text-base sm:text-xl mb-10 lg:mb-16 text-center">
                Mon parcours professionnel
            </span>

            <div className="my-container max-w-3xl">
                <div className="flex justify-center mb-8">
                    <button
                        type="button"
                        onClick={() => setActive("formation")}
                        className={`${tabButtonClass} ${
                            active === "formation"
                                ? "text-purple-400"
                                : "text-white"
                        }`}
                    >
                        <GraduationCap size={29} className="mr-1" />
                        Scolaire
                    </button>
                    <button
                        type="button"
                        onClick={() => setActive("experience")}
                        className={`${tabButtonClass} ${
                            active === "experience"
                                ? "text-purple-400"
                                : "text-white"
                        }`}
                    >
                        <Briefcase size={29} className="mr-1" />
                        Experience
                    </button>
                </div>

                <div className="grid grid-cols-[0.5fr] justify-center">
                    <div>
                        {items.map((item) => (
                            <ParcoursRow
                                key={item.title + item.calendar}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
