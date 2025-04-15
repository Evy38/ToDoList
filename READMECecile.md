# Application TodoList en POO JS

Ce projet est une app TodoList développée en JS selon les principes de la POO.

## 2 fichier .js

1. model.js : regroupe deux objets.

👇 Task (regroupe ce qui sera utile pour une seule et même tâche): 

- son constructeur recupère l'id, le litre, la descrition et la couleur choisie de chaque tâche. 

- contient deux methodes : 
   ➡️ toggleCompleted() : change l'état d'une tâche selon si elle est complétée ou non. Appelée quans on coche ou décoche une tâche
   ➡️ update() : mets à jour les champs fournis

👇 TaskList (gère la liste de tâches):

- son constructeur récupère toute les tâches et en fait un tableau (this.tasks = [] )

- contient sept methodes :
   ➡️ generateId() : 
      génère id unique pour chaque tâche 
      combine date actuelle (Date.now()) et un nombre aleatoire (Math.random()) et convertie le nombre obtenu en base 36 pour le racourcir

   ➡️ addTask(title, description, color):
       gère l'ajout d'une nouvelle tâche
       prends 3 paramètres (titre, descritpion et couleur)
       créer une nouvelle instance de tâche en récupérant un id unique via this.generateId et les trois elements en paramètre puis on ajoute cette nouvelle tâche au tableau via this.tasks.push(task)

   ➡️ getTaskById(id):
      récupère une tâche à partir de son id
      this.task : recupère e tableau de tâches
      .find((task) => task.id === id) : cherche le premier element du tableau qui contient l'id fourni
      || null : renvoi null à la place de undefinde pour indiquer si aucune tâche n'est trouvé avec l'id trouvé
      

   ➡️  updateTask(id, updates):
      mets à jour une tâche existante
      2 paramètre: l'id et un objet qui contien les nouvelles valeurs à mettre à jour appelé "update"
      la methode getTaskById() retrouve d'id corrspondant à la tâche à mettre à jour
      Si la tâche existe update(update) faire en sorte que la tâche sache se mettre à jour ele même 
      return true : pour indique que la màj est réussie

   ➡️  removeTask(id):
      Pour supprimer une tâche
      prends l'id de la tâche concernée en paramètre
      commence par sauvegarder la longueur actuelle du tableau  de tâches grace à this.tasks.length
      puis on créer un nouveau tableau avec .filter  qui renverra un tableau qui contiendra toute les tâches sauf celle de l'id noté dans les paramètres
      puis on return true sir la tâche à bien été supprimée, sinon false

   ➡️ toggleTaskComplete(id):
      coche ou decoche une tâche en fonction de son état (terminée ou pas)
      d'abord on récupère la tâche concernée par son id et on vérifie si elle existe.
      si c'est le cas on appelle la methode toggleCompleted() sur l'objet Task ce qui modifiera l'etat de la tâche 
      si aucune tâche n'est trouvée on return false


   ➡️ getAllTasks(): sert a recuperer toutes les tpâche de la liste

2. app.js : regroupe 7 fonctions dans une methode addEventListner()

👇 mise en place des bases :

   ---> l'ecouteur "DOMContentLoaded" dans lequel est contenu tout le code de ce fichier sert à executer le code seulement quand le DOM est entièrement chargé. Ce qui inclue le fichier d'objets

   ---> les 10 première lignes servent à recupérer les element html (ids et classes)

   ---> const taskList = new TaskList():
   initialise la gestion des tâches avec une instance de TaskList()

👇 Fonctions principales

   ➡️openAddTaskModal()
      Ouvre la modale en mode ajout (vide les champs).
   -> changement du titre de la modale
   -> nettoyage des champs pour instaurer une nouvelle tâche et preciser que ce n'est pas une modif
   -> couleur par defaut: vert
   -> rendre la modale visible
   -> .focus() : placement du curseur directement sur le champs du titre pour pouvoir remplir direct

➡️openEditTaskModal(taskId)
   Ouvre la modale en mode édition (remplit les champs avec les infos de la tâche).
   -> appel de la methode getTaskById de l'objet TaskList pour trouver la tâche qu'on veut modifier via son id
   -> si la tâche existe : chgmt du titre  pour instaurer un mode "edition"
   -> remplissage des champs avec les infos actuelle, signifie qu'on est ein en edition
   -> affichage de la modale + focus pour le curseur

➡️closeTaskModal()
   Ferme la modale et réinitialise le formulaire.
   -> on cache la model avec "none"
   -> reinitialise les champs avec rest()

➡️renderTasks() : Coeur de l'affichage des tâches:
   Vide et réaffiche toutes les tâches sur la page.
   -> innerHTML vide le conteneur des tâches avec ""
   -> recup de toute les tâches de la list avec l'appel de gatAllTasks()
   -> une if pour afficher un message si aucune tâche n'existe
   -> un forEach() qui :
         .Crée des cartes de tâche en crant une nouvelle div qui sera la carte ffiché dans la liste avec couleur,    nom + etat
         .crée l'en-tête avec le titre dans un header 
         .crée boutons modifier et supprimer qui appellent la fonction openEditTaskModal() via un addEventListner()  pour la modification et un autre avec removTask() pour la suppression
         .assemblage des elements dans l'en-tête de la tâche via taskHeader.appendChild(element)
         .ajout d'une balise <p> pour la descrition ou d'un text par defaut si rien n'est ajouté
         . ajout d'un <div>, d'un <input> et d'un <label> dynamiqe selon l'état, pour créer une case à cocher en mettant un addEvntListner ("click") sur input defini sur checkbox
         . assemblage du tout dans la carte puis ajout dans taskContainer via .appendChild



➡️ initEventListeners()
   Active les événements du clic et du formulaire :
      -> Ouvrir/fermer la modale
      -> Ajouter ou modifier une tâche au submit
      -> Fermer la modale si on clique à l’extérieur

➡️ addDemoTasks()
   Ajoute 3 tâches de démonstration pour tester l’affichage.

➡️ init()
   Fonction d’initialisation appellée automatiquement au lancement de la page:

    - initEventListeners(): Active tous les boutons/formulaires de l’interface (comme on a vu juste avant).
    - addDemoTasks() : Ajoute les tâches de démo pour remplir un peu l’appli.
    - renderTasks() : Affiche toutes les tâches à l’écran (même celles déjà enregistrées dans le tableau taskList).



