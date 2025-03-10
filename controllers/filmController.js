const connection = require('../data/db');


function index(req, res) {

    // query di richiesta libri
    const filmsSql = "SELECT * FROM movies;";

    connection.query(filmsSql, (err, result) => {
        // se la query non va a buon fine
        if (err) return res.status(500).json({ error: 'Database query failed' });


        // versione mappata del risultato
        const films = result.map(film => {
            return {
                ...film,
                image: req.imagePath + film.image
            }
        })




        // se tutto funziona
        res.json(films);
    });

}





















module.exports = { index, }