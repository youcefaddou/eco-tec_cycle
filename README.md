# Eco-Tec Cycle

Plateforme de recyclage électronique éco-responsable.

## Démarrage local

```bash
npm install
npm run dev
```

## Configuration
- Crée un fichier `.env` à la racine avec les variables nécessaires (voir `.env.example` si présent).
- Configure ta base de données (MySQL) et adapte `DATABASE_URL`.
- Pour Prisma :
  ```bash
  npx prisma migrate dev
  npx prisma generate
  ```

## Déploiement sur Vercel

1. **Vérifie les variables d'environnement** dans le dashboard Vercel (notamment `DATABASE_URL`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `NEXTAUTH_SECRET`).
2. **Assure-toi que la base de données est accessible** depuis Vercel (utilise un service cloud type PlanetScale, Railway, etc. si besoin).
3. **Avant de déployer, corrige toutes les apostrophes dans le JSX** :
   - Utilise `&apos;` à la place de `'` dans le texte JSX (ex : `c&apos;est`, `l&apos;indice`).
   - Remplace les balises `<a href="/...">` internes par `<Link href="/...">` de Next.js.
   - Pour les liens externes, garde `<a>` mais ajoute `target="_blank" rel="noopener noreferrer"`.
4. **Pour les images locales**, tu peux utiliser `<img>` ou `<Image />` de `next/image` (recommandé pour l'optimisation).
5. **Déploie** :
   - Pousse sur la branche connectée à Vercel, ou utilise le bouton "Deploy" sur le dashboard Vercel.

## Bonnes pratiques
- Respecte la structure Next.js (`src/app`, `public`, etc.).
- Utilise Prisma pour la gestion de la base de données.
- Utilise NextAuth pour l'authentification (Google + credentials).
- Pour tout problème de build lié à des apostrophes ou balises, corrige-les comme indiqué ci-dessus.

## Dépendances principales
- Next.js 15+
- Prisma
- NextAuth.js
- Tailwind CSS

## Scripts utiles
- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Build de production
- `npx prisma migrate dev` : Applique les migrations Prisma
- `npx prisma studio` : Ouvre Prisma Studio (interface admin DB)

---

Pour toute question ou bug, contacte l'équipe projet ou ouvre une issue sur le repo.
