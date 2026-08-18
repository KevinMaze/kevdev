type SkillCategory = {
    title: string;
    items: string[];
};

const skills: SkillCategory[] = [
    {
        title: "Aptitudes",
        items: [
            "Auto-didacte",
            "Capacité d'adaptation",
            "Polyvalent",
            "Rigoureux",
            "Autonome",
        ],
    },
    { title: "Langues", items: ["Français", "Anglais"] },
];

export default function Skills() {
    return (
        <div className="grid gap-2 mb-8">
            {skills.map((category) => (
                <div
                    key={category.title}
                    className="bg-container border border-white/10 rounded-xl text-center px-5 py-4"
                >
                    <h3 className="text-small font-medium pb-2">
                        {category.title}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
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
