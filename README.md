# 🚀 DevOps CI/CD Project

![CI Pipeline](https://github.com/pinksatannnexe-cyber/devops-cicd-project/actions/workflows/ci.yml/badge.svg)
![Docker Build](https://github.com/pinksatannnexe-cyber/devops-cicd-project/actions/workflows/docker-publish.yml/badge.svg)

## 📋 Description

Projet de mise en place d'un pipeline CI/CD complet avec GitHub Actions pour déployer une application web Node.js.

## 🛠️ Technologies utilisées

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Jest** - Tests unitaires
- **Docker** - Containerisation
- **GitHub Actions** - CI/CD
- **Docker Hub** - Registry d'images

## 📦 Fonctionnalités

- ✅ API REST avec Express
- ✅ Interface web moderne
- ✅ Tests unitaires automatisés
- ✅ Pipeline CI/CD complet
- ✅ Image Docker publiée automatiquement
- ✅ Déploiement automatique sur release

## 🚀 Installation locale
```bash
# Cloner le projet
git clone https://github.com/pinksatannnexe-cyber/devops-cicd-project.git
cd devops-cicd-project

# Installer les dépendances
npm install

# Lancer l'application
npm start

# Lancer les tests
npm test
```

L'application sera accessible sur http://localhost:3000

## 🐳 Docker

### Construire l'image
```bash
docker build -t devops-cicd-app .
```

### Lancer le conteneur
```bash
docker run -p 3000:3000 devops-cicd-app
```

### Pull depuis Docker Hub
```bash
docker pull pinksatannnexe/devops-cicd-app:latest
```

## 🔄 Workflows CI/CD

### CI Pipeline
- Déclenché sur push/PR vers `main` et `dev`
- Installation des dépendances
- Exécution des tests
- Vérification du build

### Docker Build and Push
- Déclenché sur création de release/tag
- Construction de l'image Docker
- Publication sur Docker Hub

## 📝 Structure du projet
```
devops-cicd-project/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── docker-publish.yml
├── src/
│   └── app.js
├── tests/
│   └── app.test.js
├── public/
│   └── index.html
├── Dockerfile
├── .dockerignore
├── .gitignore
├── package.json
└── README.md
```

## 🌟 Auteur

**pinksatannnexe-cyber**

## 📄 Licence

MIT