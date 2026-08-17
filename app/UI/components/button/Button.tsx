import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ButtonProps {
    href: string;
    children: ReactNode;
}

export default function Button({ href, children }: ButtonProps) {
    return (
        <Link
            href={href}
            className="group/button inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-medium text-neutral-900 transition-colors duration-400 ease-in-out hover:bg-neutral-200"
        >
            {children}
            <ArrowRight
                size={18}
                className="transition-transform duration-200 ease-in-out group-hover/button:translate-x-1"
            />
        </Link>
    );
}
