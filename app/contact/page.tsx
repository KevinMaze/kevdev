"use client";

import { useRef, type SubmitEvent } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, Mail, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const contactButtonClass =
    "group/button text-neutral-400 text-small inline-flex items-center justify-center gap-x-1";
const contactButtonIconClass =
    "transition-transform duration-300 group-hover/button:translate-x-1";
const formFieldClass = "mb-8 rounded-xl border-2 border-white/20 px-5 py-3";
const formLegendClass = "ml-3 px-1 text-xs";
const formInputClass = "w-full bg-transparent text-neutral-400 outline-none";

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;

        emailjs.sendForm("service_j5ota6d", "template_n0fh5yw", form.current, {
            publicKey: "cVxaD6990vdcczOcO",
        });
        form.current.reset();
    };

    return (
        <div>
            <section className="my-section" id="contact">
                <h1 className="text-4xl font-bold text-white text-center">
                    Garder le contact
                </h1>
                <h2 className="block text-xl mb-16 text-center">
                    Contactez moi ou demandez votre devis
                </h2>

                <div className="my-container grid grid-cols-[repeat(2,max-content)] justify-center gap-x-24 pb-12">
                    <div>
                        <h3 className="text-center text-lg font-medium mb-6">
                            Parlez-moi
                        </h3>

                        <div className="grid gap-y-4 grid-cols-[300px]">
                            <div className="bg-container border border-white/10 p-4 rounded-xl text-center">
                                <Mail
                                    size={32}
                                    className="mx-auto text-white mb-2"
                                />

                                <h3 className="text-small font-medium">
                                    E-mail
                                </h3>
                                <a
                                    href="mailto:kevinmaze0889@gmail.com"
                                    className={contactButtonClass}
                                >
                                    Ecrivez-moi
                                    <ArrowRight
                                        size={16}
                                        className={contactButtonIconClass}
                                    />
                                </a>
                            </div>

                            <div className="bg-container border border-white/10 p-4 rounded-xl text-center">
                                <FaWhatsapp
                                    size={32}
                                    className="mx-auto text-white mb-2"
                                />

                                <h3 className="text-small font-medium">
                                    Téléphone
                                </h3>
                                <a
                                    href="https://calendly.com/kevinmaze0889/30min"
                                    className={contactButtonClass}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Réservez votre appel
                                    <ArrowRight
                                        size={16}
                                        className={contactButtonIconClass}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-center text-lg font-medium mb-6">
                            Décrivez-moi votre projet
                        </h3>

                        <form ref={form} onSubmit={sendEmail} className="w-90">
                            <fieldset className={formFieldClass}>
                                <legend className={formLegendClass}>Nom</legend>
                                <input
                                    type="text"
                                    name="name"
                                    className={formInputClass}
                                    placeholder="Votre nom"
                                />
                            </fieldset>

                            <fieldset className={formFieldClass}>
                                <legend className={formLegendClass}>
                                    Email
                                </legend>
                                <input
                                    type="email"
                                    name="email"
                                    className={formInputClass}
                                    placeholder="Votre Email"
                                />
                            </fieldset>

                            <fieldset className={formFieldClass}>
                                <legend className={formLegendClass}>
                                    Projet
                                </legend>
                                <textarea
                                    name="project"
                                    cols={30}
                                    rows={6}
                                    className={`${formInputClass} resize-none`}
                                    placeholder="Décrivez votre projet"
                                />
                            </fieldset>

                            <button
                                type="submit"
                                className="group/button inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-medium text-neutral-900 transition-colors duration-400 ease-in-out hover:bg-neutral-200"
                            >
                                Envoyer message
                                <Send
                                    size={18}
                                    className="transition-transform duration-200 ease-in-out group-hover/button:translate-x-1"
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
