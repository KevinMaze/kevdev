import React from "react";
import Head from "next/head";

interface SeoProps {
    title?: string;
    description?: string;
}

export default function Seo({
    title,
    description,
}: SeoProps): React.ReactElement {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta
                name="viewport"
                content="width-device-width, initial-scale=1"
            />
            <link rel="icon" href="" />
        </Head>
    );
}
