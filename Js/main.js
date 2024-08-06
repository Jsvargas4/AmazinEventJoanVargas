import { pintarCards,checkboxDinamicos,filtroChecks,filtroSearch} from "/modules/funciones.js";

console.log("sprint 3 rappi");

let url = 'https://aulamindhub.github.io/amazing-api/events.json';
let todosLosEventos;
let categoriasEventos;
let categoriaUnica;

fetch(url)
.then(response => response.json())
.then(data => {
  todosLosEventos = data.events,

  pintarCards(todosLosEventos),

//map me crea un nuevo array ,para pasar como parametro de mi funcion un array con las categorias que mi funcion checkboxDinamicos necesita para recorrer y pintar mis checkbox dinamicos.
  categoriasEventos = data.events.map( evento => evento.category),
  categoriaUnica = [...new Set(categoriasEventos)],

//______FILTROS CRUZADOS_______/

document.getElementById('searchText').addEventListener('keyup', ()=>{
  let arregloFiltradoTexto = filtroSearch(todosLosEventos)
  let arregloFiltradoChecks = filtroChecks(arregloFiltradoTexto)
    
  //pintarCards(arregloFiltradoChecks)

  if (arregloFiltradoChecks.length != 0) {
    pintarCards(arregloFiltradoChecks)
  }else{
    document.getElementById('container').innerHTML=`
    <div class="error">
      <div class="textError">
        <h2>no hay resultados</h2>
        <h4>Vuelve a intentar</h4>
      </div>
      <div class="oops">
        <img src="../img/oops.png" alt="error">
      </div>
    </div>`
  }

} ),

document.getElementById('check').addEventListener('change', () => { 
  let arregloFiltradoChecks = filtroChecks(todosLosEventos)
  let arregloFiltradoTexto = filtroSearch(arregloFiltradoChecks)
  //pintarCards(arregloFiltradoTexto)

  if (arregloFiltradoTexto.length != 0) {
    pintarCards(arregloFiltradoTexto)
  }else{
    document.getElementById('container').innerHTML=`
    <div class="error">
      <div class="textError">
        <h2>no hay resultados</h2>
        <h4>Vuelve a intentar</h4>
      </div>
      <div class="oops">
        <img src="../img/oops.png" alt="error">
      </div>
    </div>`
  }

}),

checkboxDinamicos(categoriaUnica),
filtroSearch(todosLosEventos),
filtroChecks(todosLosEventos)

}
  
)
.catch(error => console.error('Error:', error));


