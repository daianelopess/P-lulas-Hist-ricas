function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = " ";

    let campoPesquisa = document.getElementById("campo-pesquisa").value 
    
    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Não encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let titulo = "";
    let descricao = "";
    let tag = "";


    // Itera sobre cada produto na lista de produtos (assumindo que 'produtos' é um array)
    // Para cada produto, cria um novo elemento HTML e o adiciona à string 'resultados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tag = dado.tag.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes (campoPesquisa)|| descricao.includes(campoPesquisa) || tag.includes (campoPesquisa)){
            // Cria uma nova div para cada produto, formatando o conteúdo com template literals
            resultados += `
            <div class="item-resultado">
                <h2>
                <a href="#" target="_blank">${dado.titulo}
                </a> 
                </h2>
                <p class="descricao-meta">${dado.descricao} </p> <a href=${dado.link} target="_blank">Saiba mais</a> </div> 
            `;
        }
   
   
    };

    if (!resultados) {
        resultados = "<p>Não encontrado</p>"
    }
  
    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }