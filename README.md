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
