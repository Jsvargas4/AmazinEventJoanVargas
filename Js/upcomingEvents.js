import { pintarCards,checkboxDinamicos,filtroChecks,filtroSearch} from "/modules/funciones.js";

let url = 'https://aulamindhub.github.io/amazing-api/events.json';

fetch(url)
.then(response => response.json())
.then(data => {
  //FILTRAR LOS EVENTOS FUTUROS
let arregloUpcomingEvents = data.events.filter( evento => evento.date > data.currentDate)
console.log(arregloUpcomingEvents);

// Nueva funcion que pinta las cards
pintarCards(arregloUpcomingEvents)

//map me crea un nuevo array ,para pasar como parametro de mi funcion un array con las categorias que mi funcion checkboxDinamicos necesita para recorrer y pintar mis checkbox dinamicos.
let categoriasEventos =arregloUpcomingEvents.map( evento => evento.category)//me devuelve todas las categorias que encontro pero estan duplicadas
console.log(categoriasEventos);
// con set quitamos los elementos duplicados de un array 
let categoriasUnicas = new Set(categoriasEventos) // me devuelve un set de las categorias pero debo combertirlo en un arreglo con Array.form()
let categoriaUnica = Array.from(categoriasUnicas)
//______FILTROS CRUZADOS_______/

document.getElementById('searchText').addEventListener('keyup', ()=>{
  let arregloFiltradoTexto = filtroSearch(arregloUpcomingEvents)
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

} )

document.getElementById('check').addEventListener('change', () => { 
  let arregloFiltradoChecks = filtroChecks(arregloUpcomingEvents)
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

})

checkboxDinamicos(categoriaUnica)
filtroChecks(arregloUpcomingEvents)
filtroSearch(arregloUpcomingEvents)
})
.catch(error => console.error('Error:', error));