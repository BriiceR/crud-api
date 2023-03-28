// Importation du module mongoose
const mongoose = require("mongoose");

// Définition du schéma de la collection Todo
const TodoSchema = new mongoose.Schema({
    // Titre de la tâche (obligatoire)
    title: {
        type: String,
        required: true,
    },
    // Description de la tâche (optionnelle)
    description: {
        type: String,
    },
    // État d'achèvement de la tâche (par défaut, non terminée)
    completed: {
        type: Boolean,
        default: false,
    },
    // Date de création de la tâche (par défaut, la date et l'heure actuelles)
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Exportation du modèle de la collection Todo créé à partir du schéma TodoSchema
module.exports = mongoose.model("Todo", TodoSchema);


/*
Ce code définit un schéma pour la collection "Todo" dans une base de données MongoDB. Le schéma décrit la structure de chaque document de la collection, spécifiant les champs, leurs types, les valeurs par défaut, etc. Le modèle Todo créé à partir de ce schéma permet ensuite d'effectuer des opérations de lecture, d'écriture, de mise à jour et de suppression de documents de la collection "Todo".
*/