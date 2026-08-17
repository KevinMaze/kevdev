import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Social() {
    return (
        <motion.div
            className="grid grid-cols-[max-content] gap-y-5 justify-self-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
        >
            <a
                href="https://www.instagram.com/_kebinu_/"
                className="text-xl text-white transition-all duration-400 ease-[ease] hover:text-3xl hover:text-blue-400"
                target="_blank"
                rel="noreferrer"
            >
                <FaInstagram />
            </a>
            <a
                href="https://github.com/KevinMaze"
                className="text-xl text-white transition-all duration-400 ease-[ease] hover:text-3xl hover:text-blue-400"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/k%C3%A9vin-maze-0556b917a/"
                className="text-xl text-white transition-all duration-400 ease-[ease] hover:text-3xl hover:text-blue-400"
                target="_blank"
                rel="noreferrer"
            >
                <FaLinkedinIn />
            </a>
        </motion.div>
    );
}
