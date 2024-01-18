const express = require('express');
const {readFile, writeFile, updateFile, deleteFile} = require('./readAndWrite');

const app = express();
app.use(express.json());


app.get('/movies', async (req, res) => {
    const movies = await readFile();

    return res.status(200).json({movies});
})

app.get('/movies/:id', async (req, res) => {
    const movies = await readFile();
    const { id } = req.params;
    const movie = movies.find((movie) => movie.id === Number(id));

    if(!id) {
        return res.status(404).json({message: 'Filme não encontrado'});
    }

   return res.status(200).json({movie});
});

app.post('/movies', async (req, res) => {
    const movie = req.body;
    await writeFile(movie);
    return res.status(201).json({message: 'Filme adicionado com sucesso'});
});

app.put('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const newmovie = req.body;
    const updatedMovie = await updateFile(Number(id), newmovie);
    res.status(201).json(updatedMovie);
});

app.delete('/movies/:id', async (req, res) => {
    const { id } = req.params;
    await deleteFile(id);
    res.status(200).end();
})

module.exports = app;

