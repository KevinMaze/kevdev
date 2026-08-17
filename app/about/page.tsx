import Image from "next/image";
import Avatar from "@/app/assets/KEVIN-72.jpg";
import Skills from "./Skills";
import Parcour from "@/app/about/Parcours";
import Info from "./Info";

export default function About() {
    return (
        <div>
            <section className="my-section" id="about">
                <h2 className="text-3xl text-white text-center">
                    {" "}
                    Présentation{" "}
                </h2>
                <span className="block text-small mb-16 text-center">
                    Introduction
                </span>

                <div className="my-container grid grid-cols-2 items-center gap-x-16">
                    <Image
                        src={Avatar}
                        alt="Avatar du développeur"
                        className="w-75 rounded-3xl justify-self-center"
                    />

                    <div className="about__data">
                        <p className="pr-16 mb-4">
                            Dans un monde où le numérique prend de plus en plus
                            de place, un site internet n'est pas négligeable.
                            Visibilité, référencement, publicité, amélioration
                            d'image, communication au plus près du client. Un
                            site internet est un formidable outil pour se faire
                            connaitre.{" "}
                        </p>
                        <p className="pr-16 mb-4">
                            Fort de mes 15 années d'expérience dans la
                            restauration, une passion pour le monde numérique et
                            un diplôme obtenu en développement Web, je souhaite
                            amener mon expertise afin de vous apporter de la
                            visibilité et renforcer votre entreprise.
                        </p>

                        <Skills />

                        {/* <a download="" href={CV} className="button button--flex">Télécharger le CV 
                        <svg
                            class="button__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                            d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                            fill="var(--container-color)"
                            ></path>
                            <path
                            d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                            fill="var(--container-color)"
                            ></path>
                            <path
                            d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                            fill="var(--container-color)"
                            ></path>
                            <path
                            d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                            fill="var(--container-color)"
                            ></path>
                        </svg>
                        </a> */}
                    </div>
                </div>
            </section>
            <Parcour />
            <div className="section__div__info">
                <div className="my-container max-w-3xl">
                    <Info />
                </div>
            </div>
        </div>
    );
}
