const express = require('express')
const app = express()
const port = process.env.PORT









// Definiamo la cartella che conterrà i file statici
// Express servirà automaticamente tutti i file presenti nella cartella "public"
// Questo significa che potremo accedere a immagini, CSS, JavaScript, ecc., senza dover creare una rotta specifica
app.use(express.static('public'));

// Abilitiamo il middleware per il parsing del body delle richieste in formato JSON
// Questo è necessario per poter leggere i dati inviati nel corpo di una richiesta POST o PUT
// Express trasforma automaticamente il body della richiesta in un oggetto JavaScript accessibile tramite req.body
app.use(express.json());