const express = require('express')
const app = express()
const port = process.env.PORT



// importiamo il roputer delle pizze
const filmsRouter = require('./routers/films');


// importiamo il middleware di gestione errore server
// const errorsHandler = require("./middlewares/errorsHandler");

// importiamo il middleware di gestione errore 404
// const notFound = require("./middlewares/notFound");

// importiamo il middleware di gestione path imgs
// const imagePathMiddleware = require('./middlewares/imagePath');






// Definiamo la cartella che conterrà i file statici
// Express servirà automaticamente tutti i file presenti nella cartella "public"
// Questo significa che potremo accedere a immagini, CSS, JavaScript, ecc., senza dover creare una rotta specifica
app.use(express.static('public'));

// Abilitiamo il middleware per il parsing del body delle richieste in formato JSON
// Questo è necessario per poter leggere i dati inviati nel corpo di una richiesta POST o PUT
// Express trasforma automaticamente il body della richiesta in un oggetto JavaScript accessibile tramite req.body
app.use(express.json());



// definiamo la rotta home
app.get('/api', (req, res) => {
    res.send("Ciao sono la rotta Home, dell'app di recensione film");
})


// utilizziamo la rotta dei libri andando a definire la parte iniziale delle rotte
app.use("/api/books", filmsRouter)