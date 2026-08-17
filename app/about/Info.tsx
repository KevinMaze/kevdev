type InfoCategory = {
    title: string;
    items: string[];
};

const info: InfoCategory[] = [
    { title: "Langages", items: ["HTML / CSS", "Javascript", "PHP"] },
    { title: "Bibliothèques", items: ["Bootstrap", "React"] },
    { title: "Framework", items: ["Next.js", "Symfony"] },
    {
        title: "Compétences graphiques",
        items: ["Photoshop", "Adobe XD", "Figma", "Première Pro"],
    },
];

export default function Info() {
    return (
        <div className="grid gap-2 mb-8">
            {info.map((category) => (
                <div
                    key={category.title}
                    className="bg-container border border-white/10 rounded-xl text-center px-5 py-4"
                >
                    <h3 className="text-small font-medium pb-2">
                        {category.title}
                    </h3>
                    <div className="flex justify-around">
                        {category.items.map((item) => (
                            <span key={item} className="text-tiny">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
