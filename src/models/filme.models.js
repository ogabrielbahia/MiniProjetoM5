export default class Filme {
    constructor(titulo, genero, ano, descricao) {
        this.id = Math.random() * (1000 - 1) + 1;
        this.titulo = titulo;
        this.genero = genero;
        this.ano = ano;
        this.descricao = descricao;
    }
}
