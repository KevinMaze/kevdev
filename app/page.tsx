import Link from "next/link";

export default function Home() {
    return (
        <>
            <Link href="/about">about</Link>
            <Link href="/contact">contact</Link>
            <Link href="/portfolio">portfolio</Link>
            <Link href="services">service</Link>
        </>
    );
}
