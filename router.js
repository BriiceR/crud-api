// Importation des modules nécessaires
const router = require("express").Router();
const { getTodos, createTodo, updateTodo, deleteTodo } = require("./controllers/Todo");

// Route pour la page d'accueil
router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});

// Route pour créer une nouvelle tâche
router.post("/todos", createTodo);

// Route pour récupérer toutes les tâches
router.get("/todos", getTodos);

// Route pour mettre à jour une tâche existante
router.put("/todos/:todoID", updateTodo);

// Route pour supprimer une tâche existante
router.delete("/todos/:todoID", deleteTodo);

// Exportation du router pour être utilisé dans d'autres fichiers
module.exports = router;


/*
Ce code utilise le framework Express pour créer une API RESTful qui permet de créer, lire, mettre à jour et supprimer des tâches. Les routes sont définies avec les méthodes HTTP correspondantes (GET, POST, PUT, DELETE).

La méthode Router() d'Express est utilisée pour créer un objet router qui permet de définir les routes. Les fonctions de contrôleur getTodos, createTodo, updateTodo et deleteTodo sont importées depuis le fichier ./controllers/Todo et sont utilisées pour gérer chaque route.

La route pour la page d'accueil renvoie simplement un message de bienvenue. La route pour créer une nouvelle tâche utilise la méthode POST pour ajouter une nouvelle tâche à la base de données. La route pour récupérer toutes les tâches utilise la méthode GET pour renvoyer toutes les tâches stockées dans la base de données. La route pour mettre à jour une tâche existante utilise la méthode PUT pour modifier une tâche existante dans la base de données. Enfin, la route pour supprimer une tâche existante utilise la méthode DELETE pour supprimer une tâche de la base de données.

En exportant l'objet router, ce code permet à d'autres fichiers de l'utiliser pour définir des routes supplémentaires dans le même serveur Express.
*/