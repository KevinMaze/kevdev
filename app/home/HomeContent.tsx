// Composant client requis : framer-motion utilise des hooks navigateur (scroll, DOM)
// qui ne peuvent pas s'exécuter côté serveur (contrairement à AOS qui plantait au build).
"use client";

import { motion } from "framer-motion";
import Social from "./Social";
import Data from "./Data";
import Image from "next/image";
import Avatar from "@/app/assets/KEVIN-71.jpg";

export default function HomeContent() {
    return (
        <div>
            {/* Remplace data-aos="fade-down" : la section part invisible et décalée
                vers le haut (y: -100), puis remonte à sa place (y: 0) en fondu. */}
            <motion.section
                className="my-container my-section min-h-screen flex items-center"
                id="home"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }} // déclenché quand l'élément entre dans le viewport
                viewport={{ once: true }} // l'animation ne se rejoue pas si on rescroll
                transition={{ duration: 1.5 }} // équivalent de data-aos-duration="1500"
            >
                <div className="my-container my-grid w-full -translate-y-16">
                    <div className="home__content my-grid">
                        <Social />

                        {/* Arrive depuis le haut (y: -100 -> 0) */}
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                        >
                            <Image
                                src={Avatar}
                                alt="Avatar"
                                className="h-90 w-90 object-cover object-center shadow order-1 justify-self-center animate-profile"
                            />
                        </motion.div>

                        <Data />
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
