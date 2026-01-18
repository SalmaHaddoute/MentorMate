# Plateforme d'Accompagnement - Projet MERN

## Description
Une plateforme web permettant aux étudiants de consulter les accompagnateurs disponibles, envoyer des demandes d'aide et recevoir des confirmations en temps réel. Développé avec une architecture **MERN** (MongoDB, Express, React, Node.js) et **Vite**.

## Objectifs
- ✅ Visualiser la liste des accompagnateurs disponibles
- ✅ Identifier rapidement le statut de disponibilité
- ✅ Envoyer une demande d'aide en un clic
- ✅ Recevoir un feedback pendant l'attente
- ✅ Démarrer automatiquement une session après acceptation

## Architecture
MENTOREMATE/
├── backend/ # API Node.js + Express + MongoDB
├── frontend/ # React + Vite
├── docs/ # Documentation Agile
├── .gitignore # Fichiers à ignorer
└── README.md # Ce fichier


##  Installation Rapide

### Prérequis
- ✅ Node.js (v18+)
- ✅ npm 
- ✅ MongoDB (local ou Atlas)

### 1. Cloner le projet
```bash
git clone <url-du-repo>
cd MENTOREMATE

cd backend
npm install
# Créer .env avec :
# PORT=5000
# MONGODB_URI=votre_uri_mongodb
npm run dev
# http://localhost:5000

cd frontend
npm install
npm run dev
# http://localhost:5173


Fonctionnalités (Sprint 1)
🎯 US 1.1.a - Liste des accompagnants disponibles
Backend: GET /api/accompagnants

Frontend: Composant AccompagnantList

DoD: Liste filtrée, chargement, états vides

🎯 US 1.1.b - Badge "Disponible maintenant"
Backend: Champ estDisponible

Frontend: Badge vert conditionnel

DoD: Affichage clair, contraste WCAG

🎯 US 1.3.a - Envoi de demande d'aide
Backend: POST /api/demandes-aide

Frontend: Bouton "Demander de l'aide"

DoD: Validation, feedback, anti-double-clic

🎯 US 1.3.b - Feedback pendant l'attente
Backend: GET /api/demandes-aide/:id

Frontend: Polling + spinner

DoD: Messages dynamiques, transitions