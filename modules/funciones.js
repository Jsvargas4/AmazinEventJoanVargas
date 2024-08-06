//FUNCION PINTAR TAEJETAS

export function pintarCards(arregloEvents){
    const eventsLength = arregloEvents.length;
  
    let container = document.getElementById('container');
     // para que quede limpio cada vez que se pintern las tarjetas y muestre solo las que cumplen con la condicion del filto search.
    container.innerHTML = ""
    for (let i = 0; i < eventsLength; i++) {
      let tarjeta = document.createElement('div');
      tarjeta.className = 'card'
      tarjeta.innerHTML = `
          <img src="${arregloEvents[i].image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${arregloEvents[i].name}</h5>
              <p class="card-text">${arregloEvents[i].description}</p>
            </div>
              <div class="d-flex justify-content-around  mb-2 final align-items-center">
                <p class="m-1 fs-3">$${arregloEvents[i].price}</p>
                 <a href="./pages/details.html?id=${arregloEvents[i]._id}" class="btn btn-primary">Details</a>
            </div>
        `
      container.appendChild(tarjeta)
    }
  
  }

//FUNCION PINTAR CHECHKBOX DINAMICAMENTE

export function checkboxDinamicos(ArrayCategorias){
    for (let i = 0; i < ArrayCategorias.length; i++) {
      //creo un nuevo checkbox a traves del dom
      let newChecbox = document.createElement('div')
      //Agrego las clases de boostrap a mis div que se van generando dimnamicamente, con .className
      newChecbox.className = "form-check form-check-inline"
      // Agrego la informacion a mis nuevos chechbox con la propiedad innerHTML
      newChecbox.innerHTML = `
        <input class="form-check-input" type="checkbox" id="${ArrayCategorias[i].replace(" ","-")}" value="${ArrayCategorias[i]}">
        <label class="form-check-label" for="${ArrayCategorias[i].replace(" ","-")}">${ArrayCategorias[i]}</label>
      `
      // Agrego los elementos creados a mi coontenedor principal (section con la class = "check")con appedChild
      document.getElementById('check').appendChild(newChecbox)
      
    }
  }

//FILTRO DE TEXTO

export function filtroSearch(arregloEvents){
    let texto = document.getElementById('searchText').value.toLowerCase()
    let arregloFiltro = arregloEvents
      if (texto != null || texto != undefined) {
        arregloFiltro = arregloEvents.filter(evento => evento.name.toLowerCase().includes(texto) || evento.description.toLowerCase().includes(texto) )
      }
     
    return arregloFiltro;
  }

//FILTRO DE CHACKBOXS

export function filtroChecks(arregloEvents){
    let checkboxCheckeados = [...document.querySelectorAll('input[type=checkbox]:checked')]
    checkboxCheckeados = checkboxCheckeados.map(e => e.value)
  let arregloFiltro = arregloEvents
    if(checkboxCheckeados.length != 0){
      arregloFiltro = arregloEvents.filter(evento => checkboxCheckeados.includes(evento.category))
    }
    return arregloFiltro
  }