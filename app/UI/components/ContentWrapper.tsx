"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function ContentWrapper({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return <div className={isHome ? "" : "pb-32"}>{children}</div>;
}
