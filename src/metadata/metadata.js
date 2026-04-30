module.exports = {
  name: 'Rafik BELHADJINE',
  title: 'Développeur Back-end PHP / Symfony · Laravel · API REST',
  facts: {
    'Localisation': 'Paris / Île-de-France / PACA',
    'Email':    '<a href="mailto:belhadjinerafik@gmail.com">belhadjinerafik@gmail.com</a>',
    'GitHub':   '<a href="https://github.com/RafikBelMaa">github.com/RafikBelMaa</a>',
    'LinkedIn': '<a href="https://linkedin.com/in/rafik-belhadjine">linkedin.com/in/rafik-belhadjine</a>',
  },

  skills: [
    ['PHP 8 / OOP',        90],
    ['Symfony',            85],
    ['Laravel',            85],
    ['MySQL / SQL',        85],
    ['API REST',           80],
    ['NativePHP',          75],
    ['Git / GitHub',       85],
    ['SOLID / Clean Code', 85],
    ['Linux / VPS',        75],
    ['PHPUnit',            65],
    ['JavaScript ES6+',    70],
    ['Anglais B2/C1',      75],
  ],

  intro: `
Développeur back-end PHP spécialisé en Symfony et Laravel — architecture MVC, Doctrine ORM, API REST, tests PHPUnit.
**7 projets construits from scratch** : e-commerce Sylius multi-canaux, messagerie temps réel Mercure (SSE), applications mobiles NativePHP iOS/Android, déploiement VPS (Nginx, PHP-FPM, SSL).

Formation Coding Accelerator en cours : **56 exercices algorithmiques** sans fonctions natives (QuickSort, DFS, Newton-Raphson, Shunting Yard).
Profil multidisciplinaire, anglais B2/C1, arabe A2/B1. **Disponible immédiatement.**
`,

  positions: [
    {
      title: 'Développeur Web — Stage',
      period: '2024 – 2025',
      skills: ['Symfony', 'Mercure/SSE', 'JWT', 'JavaScript'],
      contents: `
**Association** *(mission dans le cadre de l'AFPA)*

Intégration d'un module de chat en temps réel dans un site associatif Symfony existant, sans documentation disponible.

- **Défi :** site en production, aucune doc technique — compréhension de l'architecture existante requise avant modification.
- **Solution :** mise en place de Mercure (SSE) — configuration du hub, publication depuis le contrôleur, abonnement JS natif côté client.
- **Blocage résolu :** désalignement entre le secret JWT du hub et celui de l'app Symfony — résolution autonome par audit des tokens.
`
    },
    {
      title: 'Coding Accelerator — Algorithmique & Clean Code',
      period: '2025 – présent',
      skills: ['PHP', 'Bash', 'Algorithmes', 'Clean Code'],
      contents: `
Formation intensive, financée sur fonds propres.

**56 exercices progressifs PHP + Bash** sans librairies natives :
- DFS / Backtracking — Solveur de Sudoku
- Newton-Raphson — Calcul de racine carrée
- Shunting Yard — Calculatrice avec priorité d'opérateurs
- QuickSort, Merge Sort, Bubble Sort — Algorithmes de tri
- Pattern matching 2D, Tokenizers, Closures PHP, Fonctions d'ordre supérieur

GitHub : [Feu](https://github.com/RafikBelMaa/Feu) | [Air](https://github.com/RafikBelMaa/ca_epreuve_air) | [Eau](https://github.com/RafikBelMaa/ca_epreuve_eau) | [Terre](https://github.com/RafikBelMaa/ca_epreuve_terre) | [Bash](https://github.com/RafikBelMaa/ca_shellscripts)
`
    },
    {
      title: 'AFPA — Titre Professionnel Développeur Web (Bac+2)',
      period: '2024 – 2025',
      skills: ['PHP', 'Symfony', 'Laravel', 'Sylius', 'MySQL', 'PHPUnit'],
      contents: `
Projets pratiques de bout en bout :

- **Boutique e-commerce (Sylius/Symfony)** — Catalogue produit avec variantes, gestion multi-canaux, gateway de paiement sandbox. Substitution d'entités Sylius + configuration Doctrine ORM custom.
- **E-commerce (Laravel/MySQL)** — Panier persistant, tunnel de commande, middleware de fusion panier invité/utilisateur au login.
- **Plateforme de réservation (PHP/MySQL)** — Transactions avec \`SELECT FOR UPDATE\` pour prévenir les doubles réservations concurrentes.
- **Outil collaboratif (Laravel)** — Rôles admin/membre, notifications scoped par projet via Eloquent.
- **Site associatif (Symfony)** — Extraction progressive de controllers monolithiques vers services dédiés + pattern Repository.
`
    },
  ],

  softSkills: [
    ['Apprentissage rapide', 95],
    ['Autonomie',            90],
    ['Rigueur',              90],
    ['Adaptabilité',         90],
    ['Curiosité technique',  95],
    ['Travail en équipe',    85],
    ['Communication',        80],
    ['Gestion du stress',    80],
  ],

  experience: [
    {
      header: 'Projets Personnels',
      skills: ['NativePHP', 'Laravel', 'Astro', 'WordPress', 'VPS Linux'],
      contents: `
- **Application mobile techniciens (NativePHP/Laravel — iOS/Android)** — Listing de chantiers, itinéraire optimisé (nearest neighbor), fonctionnel hors connexion. Conçu pour des techniciens itinérants.
- **Application mobile événements (NativePHP/Laravel — iOS)** — Création/gestion d'événements, invitations, notifications, déployée sur device physique.
- **Déploiement VPS de A à Z** — Nginx, PHP-FPM, MySQL, SSL, DNS. Intégration d'[EasyAppointments](https://github.com/alextselegidis/easyappointments) (PHP open source) dans un site Astro statique.
- **Site vitrine (WordPress)** — Thème enfant custom, Custom Post Types, blocs Gutenberg sur mesure pour un artisan pâtissier.
`
    },
    {
      header: 'Expériences Professionnelles Antérieures',
      skills: ['Adaptabilité', 'Gestion de stress', 'Contact client'],
      contents: `
- **Gardien d'équipements sportifs — Mairies** *(2023–2024)* — Accueil, planning, maintenance.
- **Chauffeur Livreur — Pharmacie** *(2022–2023)* — Logistique, déplacements IDF, gestion des urgences. Permis B.
- **Éducateur / Surveillant de nuit — Intérim** *(2016–2022)* — Gestion de situations complexes, travail en équipe pluridisciplinaire.
`
    },
    {
      header: 'Langues',
      skills: ['Français', 'Anglais', 'Arabe'],
      contents: `
- **Français** — Langue maternelle
- **Anglais** — B2/C1 (Wall Street English — en progression active)
- **Arabe** — A2/B1
`
    },
  ]
};
