import Filme from "../models/filme.models.js";

let listaFilmes = [];

const inicializarFilmes = () => {
    listaFilmes.push(new Filme('Pantera Negra', 'Ação', 2018, 'Um super-herói africano se torna o rei de Wakanda.'));
    listaFilmes.push(new Filme('Amistad', 'Drama', 1997, 'Baseado em uma história real sobre a luta de escravos africanos pela liberdade.'));
    listaFilmes.push(new Filme('12 Anos de Escravidão', 'Drama', 2013, 'A história de um homem negro livre sequestrado e vendido como escravo.'));
    listaFilmes.push(new Filme('A Cor Púrpura', 'Drama', 1985, 'A luta de uma mulher afro-americana para encontrar sua identidade e independência.'));
    listaFilmes.push(new Filme('Django Livre', 'Faroeste', 2012, 'Um escravo libertado se torna caçador de recompensas para resgatar sua esposa.'));
    listaFilmes.push(new Filme('Selma', 'Drama', 2014, 'A luta pelos direitos civis liderada por Martin Luther King Jr.'));
    listaFilmes.push(new Filme('Malcolm X', 'Biografia', 1992, 'A vida do ativista Malcolm X e sua luta por direitos iguais.'));
    listaFilmes.push(new Filme('Black Panther: Wakanda Para Sempre', 'Ação', 2022, 'Sequência de Pantera Negra, abordando a perda e o legado de T\'Challa.'));
    listaFilmes.push(new Filme('Get Out', 'Terror', 2017, 'Um jovem negro descobre um segredo aterrorizante durante uma visita à família de sua namorada.'));
    listaFilmes.push(new Filme('Soul', 'Animação', 2020, 'A história de um músico que busca dar sentido à sua vida e entender o propósito de sua existência.'));
};

inicializarFilmes();

export const criarFilme = (titulo, genero, ano, descricao) => {
    const filme = new Filme(titulo, genero, ano, descricao);
    listaFilmes.push(filme);
    return filme;
}

export const listarFilmes = () => {
    return listaFilmes;
}

export const buscarPorId = (id) => {
    return listaFilmes.find(filme => filme.id === id);
}

export const atualizarFilme = (id, dadosAtualizados) => {
    const filmeIndex = listaFilmes.findIndex(filme => filme.id === id);
    if (filmeIndex !== -1) {
        listaFilmes[filmeIndex] = { ...listaFilmes[filmeIndex], ...dadosAtualizados };
        return listaFilmes[filmeIndex];
    }
    return null;
}

export const deletarFilme = (id) => {
    const filmeIndex = listaFilmes.findIndex(filme => filme.id === id);
    if (filmeIndex !== -1) {
        return listaFilmes.splice(filmeIndex, 1)[0];
    }
    return null;
}

export const buscarFilmesPorGenero = (genero) => {
    return listaFilmes.filter(filme => filme.genero.toLowerCase() === genero.toLowerCase());
}
