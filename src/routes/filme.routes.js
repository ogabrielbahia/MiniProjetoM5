import express from "express";
import {
    criarFilme,
    listarFilmes,
    buscarPorId,
    atualizarFilme,
    deletarFilme,
    buscarFilmesPorGenero
} from "../controllers/filme.controller.js";

const router = express.Router();

router.post('/filmes', (req, res) => {
    console.log('Requisição POST recebida:', req.body);
    const { titulo, genero, ano, descricao } = req.body;
    const novoFilme = criarFilme(titulo, genero, ano, descricao);
    res.status(201).json(novoFilme);
});

router.get('/filmes', (req, res) => {
    console.log('Requisição GET recebida para listar filmes');
    const filmes = listarFilmes();
    res.status(200).json(filmes);
});

router.get('/filmes/:id', (req, res) => {
    const { id } = req.params;
    console.log('Requisição GET recebida para filme ID:', id);
    const filme = buscarPorId(parseFloat(id));
    if (filme) {
        res.status(200).json(filme);
    } else {
        res.status(404).send('Filme não encontrado');
    }
});

router.put('/filmes/:id', (req, res) => {
    const { id } = req.params;
    console.log('Requisição PUT recebida para filme ID:', id, 'com dados:', req.body);
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
    console.log('Requisição DELETE recebida para filme ID:', id);
    const filmeDeletado = deletarFilme(parseFloat(id));
    if (filmeDeletado) {
        res.status(200).json(filmeDeletado);
    } else {
        res.status(404).send('Filme não encontrado');
    }
});

router.get('/filmes/genero/:genero', (req, res) => {
    const { genero } = req.params;
    console.log('Requisição GET recebida para filmes do gênero:', genero);
    const filmes = buscarFilmesPorGenero(genero);
    if (filmes.length > 0) {
        res.status(200).json(filmes);
    } else {
        res.status(404).send('Nenhum filme encontrado para o gênero especificado');
    }
});

export const filmeRouter = router;
