class Filme {

    constructor() {
        this.id = 1;
        this.arrayFilmes = [];
    }

    salvar() {                 //pegar dados e enviá-los para a função listaFilmes
        let filme = this.lerDados();

        if (this.validaCampos(filme)) {
            this.adicionar(filme)
        }

        this.listaFilmes();
    }

    listaFilmes() {              // inserindo filmes na tabela
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayFilmes.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_duracao = tr.insertCell();
            let td_genero = tr.insertCell();
            let td_classificacao = tr.insertCell();
            let td_lancamento = tr.insertCell();

            td_id.innerText = this.arrayFilmes[i].id;
            td_nome.innerText = this.arrayFilmes[i].nomeFilme;
            td_duracao.innerText = this.arrayFilmes[i].duracaoFilme;
            td_genero.innerText = this.arrayFilmes[i].generoFilme;
            td_classificacao.innerText = this.arrayFilmes[i].classificacaoFilme;
            td_lancamento.innerText = this.arrayFilmes[i].lancamentoData;
        
            td_id.classList.add('center')
            
        }
    }

    adicionar(filme) {                 
        this.arrayFilmes.push(filme);
        this.id++;
    }

    lerDados() {                       //pegando os dados dos inputs
        let filme = {}

        filme.id = this.id;
        filme.nomeFilme = document.getElementById('titulo').value;
        filme.duracaoFilme = document.getElementById('duracao').value;
        filme.generoFilme = document.getElementById('genero').value; 
        filme.classificacaoFilme = document.getElementById('classificacao').value;
        filme.lancamentoData = document.getElementById('lancamento').value;

        return filme;
    }

    validaCampos(filme) {            //validação dos campos de formulário

        let msg = '';

        if (filme.nomeFilme == '') {
            msg += 'Informe o título do filme \n'
        }

        if (filme.duracaoFilme == '') {
            msg += 'Informe a duração do filme \n'
        }

        if (filme.generoFilme == '') {
            msg += 'Informe o gênero do filme \n'
        }

        if (filme.classificacaoFilme == '') {
            msg += 'Informe a classificação do filme \n'
        }

        if (filme.lancamentoFilme == '') {
            msg += 'Informe a data de lançamento do filme \n'
        }

        if (msg != '') {
            alert(msg);
            return false
        }
        return true;
    }

    cancelar() {  //finalizar função para resetar campos ao clique
    }

}

var filme = new Filme();