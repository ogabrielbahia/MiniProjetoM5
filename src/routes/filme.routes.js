import express from "express";
import {criarFilme, listarFilmes, buscarPorId, atualizarFilme, deletarFilme, buscarFilmesPorGenero} from "../controllers/filme.controller.js";

const router = express.Router();

router.post('/filmes', (req, res) => {
    const { titulo, genero, ano, descricao } = req.body;
    const novoFilme = criarFilme(titulo, genero, ano, descricao);
    res.status(201).json(novoFilme);
});

router.get('/filmes', (req, res) => {
    const filmes = listarFilmes();
    res.status(200).json(filmes);
});

router.get('/filmes/:id', (req, res) => {
    const { id } = req.params;
    const filme = buscarPorId(parseFloat(id));
    if (filme) {
        res.status(200).json(filme);
    } else {
        res.status(404).send('Filme não encontrado');
    }
});

router.put('/filmes/:id', (req, res) => {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    const filmeAtualizado = atualizarFilme(parseFloat(id), dadosAtualizados);
    if (filmeAtualizado) {
        res.status(200).json(filmeAtualizado);
    } else {
        res.status(404).send('Filme não encontrado');
    }
});

router.delete('/filmes/:id', (req, res) => {
    const { id } = req.params;
    const filmeDeletado = deletarFilme(parseFloat(id));
    if (filmeDeletado) {
        res.status(200).json(filmeDeletado);
    } else {
        res.status(404).send('Filme não encontrado');
    }
});

router.get('/filmes/genero/:genero', (req, res) => {
    const { genero } = req.params;
    const filmes = buscarFilmesPorGenero(genero);
    if (filmes.length > 0) {
        res.status(200).json(filmes);
    } else {
        res.status(404).send('Nenhum filme encontrado para o gênero especificado');
    }
});

export const filmeRouter = router;

