# Application TodoList en POO JS

Ce projet est une app TodoList développée en JS selon les principes de la POO.

## Fonctionnalités

- Créer des tâches avec titre, description et catégorie de couleur
- Modifier les tâches existantes
- Marquer des tâches comme complétées
- Supprimer les tâches
- Retour visuel avec des cartes de tâches colorées
- Design responsive pour mobile et ordinateur

### Classes principales

1. **Models** (`models.js`)

   - Représente une tâche individuelle
   - Gère les propriétés et comportements d'une tâche
   - Gère la collection de tâches
   - S'occupe de l'ajout, suppression, modification

2. **app.js** (`app.js`)
   - Gère l'interface utilisateur et les interactions
   - Point d'entrée de l'application
   - Initialise les instances et démarre l'application

### Principes POO appliqués

- **Encapsulation** : Les données et comportements sont regroupés dans des classes

## Instructions pour tester le projet

1. Clonez ou téléchargez ce dépôt
2. Ouvrez le fichier `index.html`
3. Commencez à ajouter et gérer vos tâches !

`Aucune installation ou configuration supplémentaire n'est nécessaire car le projet n'utilise (HTML, CSS, JavaScript)`

## Structure des fichiers

```
TodoList/
│
├── index.html           // Structure HTML principale
├── style.css            // Styles CSS
├── models.js            // Classes Task et TaskList
├── app.js               // Logique d'interaction avec l'interface
└── images/              // Arrière-plan et autres images
    └── bg.png           // Image d'arrière-plan
```

## Points notables

1. **Aucune persistance des données** : Les tâches sont stockées en mémoire et seront perdues au rechargement de la page

## Évolutions possibles

- Ajout de la persistance des données
- Ajout de fonctionnalités de tri
