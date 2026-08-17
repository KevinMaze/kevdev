# Mise à jour automatique du portfolio depuis GitHub

## Verdict rapide

**Oui, c'est possible.** GitHub expose une API publique (pas besoin de compte/serveur tiers) qui donne accès à tes repos publics : nom, description, lien du code, et même un lien vers le site en ligne s'il est renseigné.

**Ma recommandation : l'option hybride (section 2)**, pas le tout-automatique. Raison en une phrase : tes 3 fiches actuelles ("L'Agora", "La popotte de valou", "Garage Vincent Parrot") ont des descriptions écrites pour convaincre un client, alors qu'un `description` de repo GitHub est en général une phrase technique brute ("Site Symfony pour restaurant"). Automatiser à 100% te ferait perdre cette qualité de présentation à chaque nouveau projet, sauf à systématiquement soigner la description du repo GitHub comme un texte marketing — ce qui demande la même discipline qu'éditer le tableau de projets à la main.

---

## Les 3 options

### Option A — Tout manuel (ce qui existe déjà)

Tu ajoutes un objet dans le tableau de `app/portfolio/page.tsx` à chaque nouveau projet.

- ✅ Contrôle total, texte toujours soigné, zéro dépendance externe, zéro risque de panne (API GitHub down, quota dépassé, etc.)
- ❌ Il faut rouvrir le code à chaque nouveau projet

**Le plus efficace si tu ajoutes un projet toutes les quelques semaines/mois** — ce qui semble être ton rythme actuel.

### Option B — Hybride (recommandée)

Le code va chercher automatiquement la **liste** des projets à afficher et les infos structurelles (lien du code, lien du site en ligne), mais **la description reste écrite par toi** dans le code, avec une valeur par défaut si tu ne l'as pas encore rédigée.

- ✅ Tu ne touches plus au code pour ajouter/retirer un projet de la liste (un simple tag GitHub suffit)
- ✅ Tu gardes la main sur le texte de présentation
- ✅ Si l'API GitHub est indisponible, la page peut retomber sur les infos en dur (voir section "Robustesse")
- ❌ Un peu plus de code à mettre en place au départ (une fois)

### Option C — Tout automatique

Tout vient de GitHub, description comprise.

- ✅ Zéro maintenance une fois en place
- ❌ Description technique brute, pas de contrôle sur le ton, page cassée/vide si l'API est en rate-limit ou down et qu'il n'y a pas de repli
- ❌ Il faut composer avec le fait que la description "About" d'un repo GitHub est publique et déjà lue par un autre public (développeurs) que tes visiteurs (clients potentiels)

---

## Marche à suivre — Option B (hybride)

### 1. Choisir quels projets s'affichent : les tags GitHub ("topics")

Sur chaque repo à afficher (github.com/KevinMaze/<repo> → engrenage "About" en haut à droite → **Topics**) :

1. Ajoute un topic `portfolio`.
2. Optionnel : si le site du projet est en ligne, renseigne le champ **Website** (aussi dans "About") avec son URL — c'est ce champ qui alimentera automatiquement le bouton "Voir le site".

Pour retirer un projet de l'affichage : enlève le topic `portfolio`. Pour changer l'ordre : GitHub trie par date de dernière mise à jour (`sort=updated`) par défaut, donc pousser un petit commit sur un repo le fait remonter — sinon on peut trier par nom ou définir un ordre manuel dans le code (voir "Aller plus loin").

### 2. (Optionnel mais conseillé) Un token GitHub pour éviter les limites de débit

Sans authentification, l'API GitHub autorise 60 requêtes/heure par IP. Comme la page est mise en cache côté serveur (voir étape 4), ça suffit largement en usage normal — mais en hébergement mutualisé (Vercel, etc.), l'IP peut être partagée avec d'autres sites et faire grimper le compteur plus vite que prévu.

1. Va sur github.com/settings/tokens → **Generate new token (classic)**.
2. Aucune permission (`scope`) n'est nécessaire pour lire des repos publics — tu peux générer un token "sans droit".
3. Ajoute-le dans un fichier `.env.local` à la racine du projet (**ne jamais commit ce fichier** — il est déjà ignoré par `.gitignore` par défaut sur un projet Next.js) :

   ```
   GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
   ```

4. Sur ton hébergeur (Vercel, etc.), ajoute la même variable d'environnement dans les réglages du projet.

### 3. Le code

Nouveau fichier `app/portfolio/getProjects.ts` :

```ts
type GithubRepo = {
    name: string;
    html_url: string;
    homepage: string | null;
    description: string | null;
};

export type PortfolioProject = {
    slug: string;
    title: string;
    description: string;
    codeUrl: string;
    liveUrl: string | null;
};

// Descriptions "marketing" écrites à la main. La clé est le nom exact du repo GitHub.
// Si un repo taggé "portfolio" n'a pas d'entrée ici, sa description GitHub brute
// est utilisée en attendant que tu la personnalises.
const descriptions: Record<string, string> = {
    "la_popote_de_valou":
        "Site web réalisé pour le restaurant la popotte de valou situé sur Alès dans le gard (30)",
    "Garage-ECF-2023":
        "Projet réalisé dans le cadre de mon examen de développeur web et web mobile.",
};

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
    const headers: HeadersInit = { Accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
        "https://api.github.com/search/repositories?q=user:KevinMaze+topic:portfolio&sort=updated",
        { headers, next: { revalidate: 3600 } } // relit GitHub toutes les heures max
    );

    if (!res.ok) {
        // À adapter : voir section "Robustesse" plus bas pour un repli propre
        throw new Error(`GitHub API error: ${res.status}`);
    }

    const data: { items: GithubRepo[] } = await res.json();

    return data.items.map((repo) => ({
        slug: repo.name,
        title: repo.name,
        description: descriptions[repo.name] ?? repo.description ?? "",
        codeUrl: repo.html_url,
        liveUrl: repo.homepage || null,
    }));
}
```

Dans `app/portfolio/page.tsx`, remplacer le tableau en dur par un appel à cette fonction (le composant devient `async`, comme tout Server Component qui fetch des données dans ce projet) :

```tsx
import { getPortfolioProjects } from "./getProjects";

export default async function Portfolio() {
    const projects = await getPortfolioProjects();

    return (
        <div>
            <section className="my-section" id="portfolio">
                {/* ... titre/sous-titre inchangés ... */}
                <div className="my-container grid grid-cols-3 gap-x-6">
                    {projects.map((project) => (
                        <div key={project.slug} className={projectContentClass}>
                            <div className={projectDataClass}>
                                <h3 className="text-lg mb-4 font-medium">
                                    {project.title}
                                </h3>
                                <p className="text-center text-small px-12 mb-8">
                                    {project.description}
                                </p>
                                <div className="flex gap-3">
                                    <Link href={project.codeUrl} className={projectButtonClass} target="_blank" rel="noreferrer">
                                        Voir le code
                                        <ArrowRight size={18} className="transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                                    </Link>
                                    {project.liveUrl && (
                                        <Link href={project.liveUrl} className={projectButtonClass} target="_blank" rel="noreferrer">
                                            Voir le site
                                            <ArrowRight size={18} className="transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
```

`grid-cols-3` suppose 3 projets par ligne — si le nombre de projets tagués devient variable, `grid-cols-3` avec un nombre de cartes non multiple de 3 laissera des trous visuels ; passer alors à un `grid-cols-[repeat(auto-fit,minmax(280px,1fr))]` réglera ça automatiquement.

### 4. Robustesse (que faire si l'API GitHub est en panne ou en rate-limit)

Le `throw` de l'exemple ci-dessus ferait planter la page en cas de souci réseau/API — à éviter sur un site en prod. Deux façons de gérer ça proprement :

- **Simple** : `try/catch` autour du fetch dans `getPortfolioProjects`, et si ça échoue, retourner un tableau statique de secours (par exemple les 3 projets actuels codés en dur) plutôt que de faire planter la page.
- **Next.js** : ajouter un fichier `app/portfolio/error.tsx` (Error Boundary) pour afficher un message de repli propre si jamais l'erreur remonte.

Je recommande la première option (repli silencieux) — un visiteur ne doit jamais voir une page cassée à cause d'un souci côté GitHub.

---

## Aller plus loin (si besoin un jour)

- **Ordre manuel** : ajouter un `order` dans `descriptions` (ou un tableau séparé `["la_popote_de_valou", "Garage-ECF-2023", ...]`) et trier `data.items` selon cet ordre plutôt que `sort=updated`.
- **Vignette du projet** : GitHub permet de définir une "Social preview image" par repo (Settings → General → Social preview) ; l'API ne l'expose pas directement, il faudrait construire l'URL `https://opengraph.githubassets.com/1/KevinMaze/<repo>` — fonctionne bien en pratique mais non documenté officiellement par GitHub.
- **Revalidation instantanée** : au lieu d'attendre l'heure de cache (`revalidate: 3600`), un [webhook GitHub](https://docs.github.com/fr/webhooks) sur l'événement "repository" pourrait appeler une route `app/api/revalidate/route.ts` qui déclenche `revalidatePath('/portfolio')` dès qu'un topic change — utile seulement si tu changes les topics souvent et veux voir le changement en quelques secondes plutôt qu'en moins d'une heure.

---

## En résumé

| | Manuel | Hybride (recommandé) | Tout automatique |
|---|---|---|---|
| Ajouter un projet | Éditer le code | Ajouter un topic sur GitHub | Rien à faire |
| Qualité du texte | Totale | Totale (avec repli GitHub si non renseigné) | Dépend de la description GitHub |
| Bouton "voir le site" | Manuel | Automatique via le champ Website du repo | Automatique |
| Résistant à une panne GitHub | Oui (rien à interroger) | Oui si repli codé (section 4) | Non, sauf si repli codé |
| Effort de mise en place | Aucun (déjà fait) | ~30 min une fois | ~15 min une fois |

Dis-moi si tu veux que j'implémente l'option B directement, ou si tu préfères rester en manuel pour l'instant.
