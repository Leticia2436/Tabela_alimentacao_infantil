document.getElementById('btnAdicionar').addEventListener('click', function() {
    // Pegando os valores dos inputs
    let alimento = document.getElementById('alimento').value;
    let quantidade = document.getElementById('quantidade').value;
    let horario = document.getElementById('horario').value;

    // Validar se todos os campos estão preenchidos
    if (alimento && quantidade && horario) {
        // Criar uma nova linha na tabela
        let tabela = document.querySelector('table');
        let novaLinha = tabela.insertRow();

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
