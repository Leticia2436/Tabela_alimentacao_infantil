document.getElementById('btnAdicionar').addEventListener('click', function() {
    // Pegando os valores dos inputs
    let alimento = document.getElementById('alimento').value;
    let quantidade = document.getElementById('quantidade').value;
    let horario = document.getElementById('horario').value;

    // Validar se todos os campos estão preenchidos
    if (alimento && quantidade && horario) {
        // Criar uma nova linha na tabela
        let tabela = document.querySelector('table');
        let tbody = tabela.tBodies[0]; // seleciona o tbody
        let novaLinha = tbody.insertRow(); // insere a nova linha no tbody
        

        // Inserir as células na nova linha
        let celula1 = novaLinha.insertCell(0);
        let celula2 = novaLinha.insertCell(1);
        let celula3 = novaLinha.insertCell(2);

        // Adicionar os valores nas células
        celula1.textContent = alimento;
        celula2.textContent = quantidade;
        celula3.textContent = horario;

        // Limpar os campos do formulário após adicionar
        document.getElementById('alimento').value = '';
        document.getElementById('quantidade').value = '';
        document.getElementById('horario').value = '';
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

function ordenarTabela(coluna) {
    var tabela = document.querySelector('table');
    var linhas = tabela.tBodies[0].rows;
    var ordenado = false;

    // Verifica se a coluna é numérica ou não
    var ehNumerica = false;
    for (var i = 0; i < linhas.length; i++) {
        var celula = linhas[i].cells[coluna];
        var conteudo = celula.textContent;
        if (!isNaN(conteudo)) {
            ehNumerica = true;
            break;
        }
    }

    // Ordena as linhas da tabela
    while (!ordenado) {
        ordenado = true;
        for (var i = 0; i < linhas.length - 1; i++) {
            var celula1 = linhas[i].cells[coluna];
            var celula2 = linhas[i + 1].cells[coluna];
            var conteudo1 = celula1.textContent;
            var conteudo2 = celula2.textContent;

            if (ehNumerica) {
                if (parseFloat(conteudo1.trim()) > parseFloat(conteudo2.trim())) {
                    // Troca as linhas
                    var pai = linhas[i].parentNode;
                    pai.insertBefore(linhas[i + 1], linhas[i]);
                    ordenado = false;
                }
            } else {
                if (conteudo1.toLowerCase() > conteudo2.toLowerCase()) {
                    // Troca as linhas
                    var pai = linhas[i].parentNode;
                    pai.insertBefore(linhas[i + 1], linhas[i]);
                    ordenado = false;
                }
            }
        }
    }
}

