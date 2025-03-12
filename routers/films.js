// Importiamo il modulo Express
const express = require('express');

// Creiamo un'istanza del router di Express
// Questo ci permette di definire le rotte separatamente dal file principale dell'applicazione
const router = express.Router();

// Importiamo il controller che gestisce le operazioni sui film
// Il controller contiene la logica per recuperare e gestire i dati relativi ai film
const filmController = require("../controllers/filmController");

// **ROTTE** - Definiamo le API per la gestione dei film

// **Rotta per ottenere l'elenco completo dei film**
// Quando un client fa una richiesta GET a `/film`, viene eseguita la funzione `index` del controller
router.get('/', filmController.index);

// **Rotta per ottenere i dettagli di un singolo film specifico**
// Il parametro `:id` nella rotta rappresenta l'ID del film che vogliamo visualizzare
// Il controller `show` si occuperà di recuperare e restituire i dettagli del film corrispondente
router.get('/:id', filmController.show);

// Esportiamo il router per poterlo utilizzare in altri file dell'applicazione
module.exports = router;