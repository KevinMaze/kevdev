import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { StaticImageData } from "next/image";
import Popotte from "@/app/assets/popotte.jpg";
import Parrot from "@/app/assets/parrot.jpg";

type PortfolioProject = {
    title: string;
    description: string;
    codeUrl: string;
    liveUrl?: string;
    image?: StaticImageData;
};

// Mets à jour ce tableau pour ajouter/retirer/modifier un projet affiché.
// - liveUrl : optionnel, ajoute le bouton "Voir le site" s'il est renseigné
// - image : optionnel, import statique depuis app/assets, active l'effet de survol s'il est renseigné
const projects: PortfolioProject[] = [
    {
        title: "L'Agora",
        description:
            "This is a project that I made for my portfolio, it is a website that shows my skills and my most recent projects.",
        codeUrl: "https://github.com/KevinMaze/agora",
        liveUrl: "https://lagoranimes.fr",
    },
    {
        title: "La popotte de valou",
        description:
            "Site web réalisé pour le restaurant la popotte de valou situé sur Alès dans le gard(30)",
        codeUrl: "https://github.com/KevinMaze/la_popote_de_valou",
        image: Popotte,
    },
    {
        title: "Garage Vincent Parrot",
        description:
            "Projet réalisé dans le cadre de mon examen de développeur web et web mobile.",
        codeUrl: "https://github.com/KevinMaze/Garage-ECF-2023",
        image: Parrot,
    },
];

const projectContentClass =
    "group/card relative overflow-hidden border border-white/10 bg-container py-12";
const projectImageClass =
    "absolute inset-0 z-0 bg-cover bg-center opacity-0 transition-opacity duration-700 ease-in-out pointer-events-none group-hover/card:opacity-30";
const projectDataClass =
    "relative z-10 w-full h-full flex flex-col items-center justify-between";
const projectButtonClass =
    "group/button inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-medium text-neutral-900 transition-colors duration-400 ease-in-out hover:bg-neutral-200";

function ProjectButton({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className={projectButtonClass}
            target="_blank"
            rel="noreferrer"
        >
            {children}
            <ArrowRight
                size={18}
                className="transition-transform duration-200 ease-in-out group-hover/button:translate-x-1"
            />
        </Link>
    );
}

export default function Portfolio() {
    return (
        <div>
            <section className="my-section" id="portfolio">
                <h1 className="text-4xl text-white text-center font-bold">
                    Portfolio
                </h1>
                <h2 className="block text-xl mb-16 text-center">
                    Projets recents
                </h2>

                <div className="my-container grid grid-cols-3 gap-x-6">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className={projectContentClass}
                        >
                            {project.image && (
                                <div
                                    className={projectImageClass}
                                    style={{
                                        backgroundImage: `url(${project.image.src})`,
                                    }}
                                />
                            )}

                            <div className={projectDataClass}>
                                <h3 className="text-lg mb-4 font-medium">
                                    {project.title}
                                </h3>
                                <p className="text-center text-small px-12 mb-8">
                                    {project.description}
                                </p>

                                <div className="flex flex-col gap-3">
                                    <ProjectButton href={project.codeUrl}>
                                        Voir le code
                                    </ProjectButton>
                                    {project.liveUrl && (
                                        <ProjectButton href={project.liveUrl}>
                                            Voir le site
                                        </ProjectButton>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
