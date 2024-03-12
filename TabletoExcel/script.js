function adicionarItem(){
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value;
    var quantidade = document.getElementById("quantidade").value;

    // validar se o input esta vazio
    if(!nome || !valor || !quantidade ){
        alert("preencha todos os inputs")
        return;
    }

    // criar a linhga da tabela e preencher com o valor digitado
    // primeira linha da tabela [0]
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);

    // criar as celulas da tabela
    var celulaNome = novaLinha.insertCell(0)
    var celulaValor = novaLinha.insertCell(1)
    var celulaQuantidade = novaLinha.insertCell(2)

    celulaNome.innerHTML = nome;
    celulaValor.innerHTML = valor;
    celulaQuantidade.innerHTML = quantidade;

    // limpar os campos do input apos atribuicao de valores
    document.getElementById("nome").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("quantidade").value = "";
}

function exportarParaTabela(){
    var tabela = document.getElementById("tabela");
    var nomeArquivo = "tabla.xlsx";
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Tabela de produtos"})
    XLSX.writeFile(wb, nomeArquivo)
}