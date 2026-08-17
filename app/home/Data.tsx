import { motion } from "framer-motion";
import Button from "@/app/UI/components/button/Button";
export default function Data() {
    return (
        // Arrive depuis la droite (x: 100 -> 0).
        // Pas besoin de "use client" ici : ce composant est importé par HomeContent.tsx
        // qui porte déjà la directive, donc il est inclus dans le bundle client.
        <motion.div
            className="home__data"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
        >
            <h1 className="text-6xl mb-2 font-bold">Kévin Mazé</h1>
            <h2 className="text-3xl relative pl-20 mb-4 before:absolute before:left-0 before:top-4 before:h-px before:w-17.5 before:bg-white before:content-['']">
                Développeur Web
            </h2>
            <p className="max-w-100 mb-12">
                Votre visibilité mérite un site pensé avec soin. <br />
                Sur-mesure, de A à Z, pour une image de marque qui vous
                ressemble.
            </p>

            <Button href="/contact">Me Contacter</Button>
        </motion.div>
    );
}
