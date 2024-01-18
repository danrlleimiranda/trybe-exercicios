const readline = require('readline-sync');
const fs = require('fs').promises;
const path = require('path');
const { json } = require('express');


const readFile = async () => {
   const movies = await fs.readFile(path.resolve(__dirname, './movies.json'));
   return JSON.parse(movies);
}

const writeFile = async (movie) => {
    const moviesParsed = await readFile();
    const newMovies = JSON.stringify([...moviesParsed, {id: moviesParsed.length + 1 , ...movie}]);

    try {
        await fs.writeFile(path.resolve(__dirname, './movies.json'), newMovies);
        console.log('Arquivo escrito com sucesso!');
    }catch(err) {
        console.log(err.message);
    }
}

const updateFile = async (id, movie) => {
    const movies = await readFile();
    const oldMovies = movies.filter((movie) => {
        movie.id !== id
    });
    const updatedMovie = {id: id, ...movie}
    const updatedMovies = movies.reduce((moviesList, currentMovie) => {
        if(currentMovie.id === updatedMovie.id) return [...moviesList, updatedMovie];
        return [...moviesList, currentMovie]
    }, [])
    const updatedData = JSON.stringify(updatedMovies);
    try {
        await fs.writeFile(path.resolve(__dirname, './movies.json'), updatedData);
        console.log('Arquivo atualizado com sucesso!');
    }catch(err) {
        console.log(err.message);
    }
    return updatedMovie;
}

const deleteFile = async (id) => {
    const movies = await readFile();
    const newmovies = movies.filter((team) => team.id !== Number(id));
    const stringifyMovies = JSON.stringify(newmovies);
    await fs.writeFile(path.resolve(__dirname, './movies.json'), stringifyMovies);
}

module.exports = {readFile, writeFile ,updateFile, deleteFile};