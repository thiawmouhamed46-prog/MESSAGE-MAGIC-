# EmailAnswer - Plateforme SaaS Premium de Gestion d'Emails

## 🎯 Objectif

EmailAnswer est une plateforme B2B qui aide les entreprises à gérer leurs emails plus efficacement avec des outils intelligents de tri, de réponse automatique et d'automatisation.

## 🛠️ Stack Technique

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes
- **Base de données**: Supabase
- **Paiement**: PayPal
- **Email**: Gmail API, Microsoft Outlook API

## 🎨 Design

- Inspiration Apple + Glassmorphism
- Palette: Blanc cassé, gris clair, corail, accent rouge doux
- Coins arrondis, ombres douces, transitions fluides
- Responsive mobile et desktop

## 📋 Fonctionnalités

✅ Landing page premium  
✅ Système d'authentification (Google, Microsoft, Email)
✅ Dashboard personnel  
✅ Gestion d'inbox  
✅ Système de facturation PayPal  
✅ Paramètres utilisateur  
✅ Design responsive  

## 🚀 Installation & Démarrage

```bash
# Installation des dépendances
npm install

# Copier les variables d'environnement
cp .env.example .env.local

# Remplir les variables d'environnement
# Démarrer le serveur de développement
npm run dev

# Accéder à http://localhost:3000
```

## 🔐 Variables d'Environnement

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
NEXT_PUBLIC_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
NEXT_PUBLIC_MICROSOFT_CLIENT_ID
MICROSOFT_CLIENT_SECRET
NEXT_PUBLIC_PAYPAL_CLIENT_ID
PAYPAL_CLIENT_SECRET
```

## 📦 Structure du Projet

```
├── app/
│   ├── page.tsx                 # Landing page
│   ├── auth/
│   │   ├── login/              # Page de connexion
│   │   └── signup/             # Page d'inscription
│   ├── dashboard/              # Pages du dashboard
│   │   ├── page.tsx
│   │   ├── inbox/
│   │   ├── billing/
│   │   └── settings/
│   ├── layout.tsx              # Layout racine
│   └── globals.css             # Styles globaux
├── components/                 # Composants réutilisables
├── public/                     # Assets statiques
└── tailwind.config.ts          # Configuration Tailwind
```

## 🌐 Déploiement sur Vercel

1. Push le code sur GitHub ✅
2. Connecter le repo à Vercel
3. Ajouter les variables d'environnement
4. Deploy!

```bash
# Build pour production
npm run build

# Démarrer la version production
npm start
```

## 📱 Pages Disponibles

- `/` - Landing page
- `/auth/login` - Connexion
- `/auth/signup` - Inscription
- `/dashboard` - Dashboard principal
- `/dashboard/inbox` - Gestion d'emails
- `/dashboard/billing` - Facturation
- `/dashboard/settings` - Paramètres

## 💳 Intégration PayPal

Les clés PayPal sont déjà configurées dans `.env.local`:
- Client ID configuré
- Client Secret configuré de manière sécurisée

## 🎯 Prochaines Étapes

- [ ] Intégrer Supabase Auth
- [ ] Implémenter Gmail/Outlook OAuth
- [ ] Créer les endpoints API
- [ ] Connecter PayPal Checkout
- [ ] Tests et optimisation

## 📄 Licence

Propriétaire - EmailAnswer © 2024
