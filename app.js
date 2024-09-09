function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Linha para depuração, pode ser removida em produção

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    // se o campoPesquisa se for uma string sem nada
    if (campoPesquisa == "") 
        { section.innerHTML = "<p>Nada foi encontrado</p>" ;return }
   
        

    let resultados = "";

    // Inicializa uma string vazia para armazenar os resultados formatados
   

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados)
       {
       
     // se titulo includes campoPesquisa
    if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Descrição completa</a>
            </div>
        `;
        //    
    }

    if (!resultados) {resultados = "<p>Nada foi encontrado. Digite o nome do carro</p>"}

    // Atribui o HTML gerado para o conteúdo da seção
    section.innerHTML = resultados;
}}