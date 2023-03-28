// Importe le modèle Todo pour interagir avec la base de données
const Todo = require("../model/Todo");

// Récupère tous les documents de la collection Todo et renvoie une réponse JSON contenant tous les todos.
const getTodos = (req, res) => {
    Todo.find()
        .then((todos) => {
            res.json(todos);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

// Crée un nouveau document Todo en utilisant les données du corps de la requête HTTP et renvoie une réponse JSON contenant le todo créé.
const createTodo = (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
    });
    todo
        .save()
        .then((todo) => {
            res.json(todo);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

// Met à jour un document Todo existant en utilisant les données du corps de la requête HTTP et renvoie une réponse JSON contenant le todo mis à jour.
const updateTodo = (req, res) => {
    Todo.findOneAndUpdate(
        { _id: req.params.todoID },
        {
            $set: {
                title: req.body.title,
                description: req.body.description,
                completed: req.body.completed,
            },
        },
        { new: true },
    )
        .then((todo) => {
            res.json(todo);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

// Supprime un document Todo existant à partir de son identifiant et renvoie une réponse JSON contenant un message de confirmation.
const deleteTodo = (req, res) => {
    Todo.deleteOne({ _id: req.params.todoID })
        .then(() => res.json({ message: "Todo Deleted" }))
        .catch((err) => res.send(err));
};

// Exporte les fonctions pour être utilisées dans une application Node.js.
module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};
